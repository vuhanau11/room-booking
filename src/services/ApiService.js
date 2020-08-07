import http from './httpCommon';

const getCity = () => {
  return http.get('/city');
};

const getCityById = (cityId) => {
  return http.get(`/city/${cityId}`);
};

const getRoomById = (id) => {
  return http.get(`/rooms/${id}`);
};

// const book = (id, data) => {
// };

// const findByTitle = (title) => {
//   return http.get(`/rooms?title=${title}`);
// };

export default {
  getCity,
  getCityById,
  getRoomById,
};
