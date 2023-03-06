import axios from 'axios';

const api = axios.create(
    {
        baseURL:"http://servicodados.ibge.gov.br/api/v3"
    }
)

export default api;