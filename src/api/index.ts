import { isBefore, isAfter } from 'date-fns'
import { exampleEvents } from './example-events'

export interface EventsQuery {
  query: string
  startDate: Date
  endDate: Date
}

// NOTE: Simulate API call, this would be REST or GraphQL Endpoint
export const useEventsQuery = ({ query, startDate, endDate }: EventsQuery) => {
  const events = exampleEvents.filter(
    (t) =>
      t.name.toLowerCase().includes(query.toLowerCase()) &&
      isBefore(startDate, t.date) &&
      isAfter(endDate, t.date)
  )

  return { events }
}

export const useEventById = (id?: string) => {
  const event = exampleEvents.find((t) => t.id === id)

  return { event }
}
