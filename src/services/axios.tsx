import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://backend.agendasolutioncenterbelem.com/api/',
})

export const api_dev = axios.create({
    baseURL: 'https://www.agendasolutioncenterbelem.com/api/',
})

export const api_local = axios.create({
    baseURL: 'http://localhost:3000/api/',
})
