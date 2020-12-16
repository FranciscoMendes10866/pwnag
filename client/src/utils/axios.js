import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:4000/api/auth/',
    timeout: 6000
})

export default instance
