export interface Response<T> {
  readonly data: T
}

export interface Pagination {
  readonly page: number
  readonly perPage: number
  readonly totalPages: number
}

export interface PaginatedResponse<T> extends Response<T> {
  readonly pagination: Pagination
}