import axios from 'axios';

export default axios.create({
  baseURL: 'https://mock-project-rikkei.herokuapp.com',
  headers: {
    'Content-type': 'application/json',
  },
});
