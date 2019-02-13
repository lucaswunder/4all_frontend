import axios from 'axios';
import store from '~/store';

const api = axios.create({
  baseURL: 'http://localhost:3333/api',
});

api.interceptors.request.use((config) => {
  const { token } = store.getState().auth;
  // const { active: team } = store.getState().teams;

  const headers = { ...config.headers };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  // if (team) {
  //   headers.TEAM = team.slug;
  // }

  return { ...config, headers };
});

api.interceptors.response.use(
  response => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.setItem('@4allEkky:token', '');
      window.location.href = '/';
    }
    return Promise.reject(error);
  },
);

export default api;
