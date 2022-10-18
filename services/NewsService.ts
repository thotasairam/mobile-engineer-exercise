import axios from 'axios';

const newsClient = axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: {
    'Content-type': 'application/json',
    Authorization: '03c83906fee24e5bbcce6d4e1d22dff4',
  },
});
