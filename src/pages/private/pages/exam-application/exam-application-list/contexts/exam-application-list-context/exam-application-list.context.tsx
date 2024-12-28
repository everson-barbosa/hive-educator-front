import { Filters, useFilters } from "@/hooks/use-filters/use-filters.hook";
import { Pagination, usePagination } from "@/hooks/use-pagination/use-pagination.hook";
import { ExamApplicationStatus } from "@/models/entities/exam-application.model";
import { fetchExamApplicationList, FetchExamApplicationListResponse, OrderBy, QUERY_KEY } from "@/services/exam-applications/fetch-exam-application-list/fetch-exam-application-list.service";
import { Order } from "@/types/request/ordernation";
import { useQuery } from "@tanstack/react-query";
import { createContext, ReactNode } from "react";

interface ExamApplicationListFilters {
  readonly order?: Order 
  readonly orderBy?: OrderBy
  readonly status?: ExamApplicationStatus[]
}

export interface ExamApplicationListContextProps {
  readonly examApplicationList: {
    readonly data: FetchExamApplicationListResponse
    readonly isLoading: boolean
    readonly isPending: boolean
    readonly isError: boolean
  }
  readonly filters: Filters<ExamApplicationListFilters>
  readonly pagination: Pagination
}

export const ExamApplicationListContext = createContext({} as ExamApplicationListContextProps)

export interface ExamApplicationListProviderProps {
  readonly children: ReactNode
}

export function ExamApplicationListProvider({ children }: ExamApplicationListProviderProps) {
  const filters = useFilters<ExamApplicationListFilters>({
    order: 'asc',
    orderBy: 'createdAt',
    status: []
  })
  const pagination = usePagination()

  const fetchExamApplicationListFn = async () => await fetchExamApplicationList({
    order: filters.value.order,
    orderBy: filters.value.orderBy,
    status: filters.value.status,
  })

  const { data, isError, isPending, isLoading } = useQuery({
    queryFn: fetchExamApplicationListFn,
    queryKey: [QUERY_KEY, filters]
  })

  return (
    <ExamApplicationListContext.Provider value={{
      examApplicationList: {
        data,
        isLoading,
        isPending,
        isError,
      },
      filters,
      pagination
    }}>
      {children}
    </ExamApplicationListContext.Provider>
  )
}