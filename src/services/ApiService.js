import http from './httpCommon';
import queryString from 'query-string';

const getCity = () => {
  return http.get('/city');
};

const getCityById = (cityId) => {
  return http.get(`/city/${cityId}`);
};

const getAllRooms = () => {
  return http.get(`/rooms`);
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

const findByName = (params) => {
  const queryParams = queryString.stringify(params);
  return http.get(`/rooms?${queryParams}`);
};

const checkout = (data) => {
  return http.post('/checkout', data);
};

export default {
  getCity,
  getCityById,
  getRooms,
  getRoomById,
  getListImage,
  findByName,
  checkout,
  getAllRooms,
};
