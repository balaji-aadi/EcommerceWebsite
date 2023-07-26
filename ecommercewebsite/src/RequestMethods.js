import axios from 'axios'


const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjZlZjM2NTE3NDI5OTc3M2EyZTNjNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4OTgzNzQ0OCwiZXhwIjoxNjkwMDk2NjQ4fQ.1lCvV-ibIcOAbF8nsiQCgO8F4JWxPfvmLkK2zUMXHLU"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header : {token : TOKEN}
})