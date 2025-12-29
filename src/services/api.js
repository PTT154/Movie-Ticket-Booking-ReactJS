import axios from "axios";

const TOKEN_CYBERSOFT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA5MCIsIkhldEhhblN0cmluZyI6IjI5LzA1LzIwMjYiLCJIZXRIYW5UaW1lIjoiMTc4MDAxMjgwMDAwMCIsIm5iZiI6MTc1MzAzMDgwMCwiZXhwIjoxNzgwMTYwNDAwfQ.KkGRtLpEsgoM4M_TapjOZIzvAwbay3QvXIwwN8XUqWk";

const api = axios.create({
    baseURL: "https://movienew.cybersoft.edu.vn/api",
});

//middleware
api.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        TokenCybersoft: TOKEN_CYBERSOFT,
    }
    return config;
});

export default api;