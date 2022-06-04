import axios from "axios";

export const ApiServices = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'aplicattion/json'
    }
})