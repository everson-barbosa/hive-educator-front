import { ISO8601String } from "@/types/dates/ISO8601"

export type ExamApplicationStatus = 
  'created' | 
  'scheduled' | 
  'in-progress' | 
  'finished' | 
  'canceled'

export interface ExamApplication {
  readonly title: string
  readonly description: string
  readonly status: ExamApplicationStatus
  readonly startAt: ISO8601String | null
}