import axios from 'axios'

export default axios.create({
  baseURL: 'https://room-booking-rikkei.herokuapp.com',
  headers: {
    'Content-type': 'application/json',
  },
})
