// OrganizerService.ts
import axios from 'axios'
import type { Organizer } from '@/types' // Import the Organizer type if not already imported

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL, // Adjust the base URL as needed
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getOrganizers() {
    return apiClient.get('/organizers')
  },
  getOrganizer(id: number) {
    return apiClient.get(`/organizers/` + id)
  },
  getEvents(limit: number, page: number) {
    return apiClient.get('/events', {
      params: {
        _limit: limit, // Limit the number of results
        _page: page // Specify the page number for pagination
      }
    })
  },
  saveOrganizer(organizer: Organizer) {
    return apiClient.post('/organizers', organizer) // Make sure to use the correct endpoint
  }
}
