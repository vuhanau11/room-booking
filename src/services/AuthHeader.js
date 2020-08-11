export default function AuthHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user) {
    return { Authorization: 'Bearer This is token' };
  } else {
    return {};
  }
}
