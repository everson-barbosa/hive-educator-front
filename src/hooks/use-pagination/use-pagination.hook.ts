import { PAGINATION_CONFIG } from "@/config/request/pagination.config";
import { useState } from "react";

export interface Pagination {
  readonly page: number
  readonly perPage: number
  readonly totalPages?: number
  readonly changePage: (page: number) => void
  readonly changePerPage: (perPage: number) => void
  readonly changeTotalPages: (totalPages: number) => void
}

interface UsePaginationProps {
  readonly page?: number
  readonly perPage?: number
  readonly totalPages?: number
}

export function usePagination({ 
  page: defaultPage = 0, 
  perPage: defaultPerPage = PAGINATION_CONFIG.perPage,
  totalPages: defaultTotalPages = 0
}: UsePaginationProps = {}): Pagination {
  const [page, setPage] = useState(defaultPage)
  const [perPage, setPerPage] = useState(defaultPerPage)
  const [totalPages, setTotalPages] = useState(defaultTotalPages)

  const changePage = (page: number) => {
    setPage(page)
  }

  const changePerPage = (perPage: number) => {
    setPerPage(perPage)
  }

  const changeTotalPages = (totalPages: number) => {
    setTotalPages(totalPages)
  }

  return {
    page,
    perPage,
    totalPages,
    changePage,
    changePerPage,
    changeTotalPages
  }
}