import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://backend.agendasolutioncenterbelem.com/api/',
})

export const api_dev = axios.create({
    baseURL: 'https://agendasolutioncenterbelem.com/api/',
})
