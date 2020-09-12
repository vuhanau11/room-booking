import axios from 'axios'

const API_URL = process.env.REACT_APP_API_AUTHEN + 'auth/'

const register = (email, phone, lastName, firstName, password) => {
  return axios
    .post(API_URL + 'register', {
      email,
      phone,
      lastName,
      firstName,
      password,
    })
    .then((response) => {
      if (response.config.data) {
        localStorage.setItem('user', response.config.data)
      }
      return response.config.data
    })
}

const login = (email, password) => {
  return axios
    .post(API_URL + 'login', {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('token', JSON.stringify(response.data))
      }
      return response.data
    })
}

const logout = () => {
  localStorage.clear()
}

export default {
  register,
  login,
  logout,
}
