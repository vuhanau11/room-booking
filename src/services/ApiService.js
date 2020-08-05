import http from './httpCommon';

const getRooms = () => {
  return http.get('/rooms');
};

const getId = (id) => {
  return http.get(`/rooms/${id}`);
};

// const book = (id, data) => {
// };

// const findByTitle = (title) => {
//   return http.get(`/tutorials?title=${title}`);
// };

export default {
  getRooms,
  getId,
};
