import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_GITHUB_API_BASE_URL,
  timeout: 4000,
  headers: {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_KEY}`,
    'X-GitHub-Api-Version': '2022-11-28',
  },
});
