import http from './httpCommon';

const register = (email, phone, lastName, firstName, password) => {
  return http.post('/user', {
    email,
    phone,
    lastName,
    firstName,
    password,
  });
};

const getCity = () => {
  return http.get('/city');
};

const getCityById = (id) => {
  return http.get(`/city/${id}`);
};

const getRoomById = (id) => {
  return http.get(`/rooms/${id}`);
};

// const findByTitle = (title) => {
//   return http.get(`/rooms?title=${title}`);
// };

export default {
  getCity,
  getCityById,
  getRoomById,
  register,
};
