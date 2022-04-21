import axios from 'axios'

const url = 'http://localhost:3001/users'

export const fetchUser = () => axios.get(url)
export const createUser = (newUser) => axios.post(url, newUser)
