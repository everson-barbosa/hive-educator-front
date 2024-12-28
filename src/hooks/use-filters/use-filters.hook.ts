import { useState } from "react"

export interface Filters<T> {
  readonly value: Partial<T>
  readonly update: (filters: Partial<T>) => void
} 

type DefaultFilter<T> = Partial<T> 

export function useFilters<T>(defaultFilter: DefaultFilter<T> = {}): Filters<T> {
  const [filters, setFilters] = useState<Partial<T>>(defaultFilter)

  const update = (filters: Partial<T>) => {
    setFilters(prev => ({ ...prev, ...filters }))
  }

  return {
    value: filters,
    update
  }
}