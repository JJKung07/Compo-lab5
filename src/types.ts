export interface Event {
  id: number
  category: string
  title: string
  description: string
  location: string
  date: string
  time: string
  petsAllowed: boolean
  organizer: organizer
}

export interface MessageState {
  message: String
}

export interface EventState {
  event: Event | null
}

export interface organizer {
  id: number
  name: string
}
