import { EXAMS_API_CONFIG } from "@/config/api/exams-api.config";
import { PAGINATION_CONFIG } from "@/config/request/pagination.config";
import { ExamApplication, ExamApplicationStatus } from "@/models/entities/exam-application.model";
import { Order } from "@/types/request/ordernation";
import { PaginatedResponse } from "@/types/request/response";
import axios from "axios"

export type OrderBy = 'startAt' | 'endAt' | 'createdAt' | 'updatedAt'

interface FetchExamApplicationListProps {
  readonly page?: number
  readonly perPage?: number
  readonly orderBy?: OrderBy
  readonly order?: Order
  readonly status?: ExamApplicationStatus[]
}

export type FetchExamApplicationListResponse = PaginatedResponse<ExamApplication[]>

export const QUERY_KEY = ['examApplicationList']

export function fetchExamApplicationList({ 
  page = 0,
  perPage = PAGINATION_CONFIG.perPage,
  orderBy = 'startAt', 
  order = 'asc',
  status = []
}: FetchExamApplicationListProps) {
  const search = new URLSearchParams({ 
    page: String(page), 
    perPage: String(perPage), 
    orderBy, 
    order 
  })

  if (status.length > 0) {
    const parsedStatus = status.join(',')
    search.append('status', parsedStatus)
  }

  return axios.get<FetchExamApplicationListResponse>(
    `${EXAMS_API_CONFIG.fetchExamApplicationList}?${search.toString()}`
  )
}