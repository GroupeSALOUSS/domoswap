import axios from 'axios'

const API = axios.create({baseURL: "http://localhost:3001"})

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });

export const signIn = (formData) => API.post('/users/login', formData)
export const createUser = (newUser) => API.post('/users/signup', newUser)



