import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '64cb7e9375c055230d64b013c4bca79f',
  },
});

export default axiosInstance