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

const login = (email, password) => {
  return http
    .post('/user', {
      email,
      password,
    })
    .then((response) => {
      localStorage.setItem('user', JSON.stringify(response.data));
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
