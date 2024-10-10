import axios from 'axios'

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
  getEvents(limit, page) {
    return apiClient.get('/events', {
      params: {
        _limit: limit, // Limit the number of results
        _page: page // Specify the page number for pagination
      }
    })
  }
}
