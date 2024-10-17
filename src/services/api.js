import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '3081cd2b76b4c9ac095d70d5d7da8184',
        language: 'pt-BR',
        page: 1
    }
})

export default api