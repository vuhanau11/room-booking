import http from './httpCommon';

const getCity = () => {
  return http.get('/city');
};

const getCityById = (cityId) => {
  return http.get(`/city/${cityId}`);
};

const getRooms = (cityId) => {
  return http.get(`/city/${cityId}/rooms`);
};

const getRoomById = (roomId) => {
  return http.get(`/rooms/${roomId}`);
};

const getListImage = (roomId) => {
  return http.get(`/rooms/${roomId}/listImgUrl`);
};

// const findByTitle = (title) => {
//   return http.get(`/rooms?title=${title}`);
// };

export default {
  getCity,
  getCityById,
  getRooms,
  getRoomById,
  getListImage,
};
