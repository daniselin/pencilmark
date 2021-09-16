import axios from "axios";
import api from "./api";

const apiAxios = axios.create({
    timeout: 30000,
    headers: {
        'accept': 'application/json',
        'X-CSRFToken': getCookie('csrftoken')
    },
});

axios.defaults.withCredentials = true;
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

apiAxios.interceptors.request.use(function (config) {
    config.headers['Authorization'] = localStorage.getItem('access') ? "JWT " + localStorage.getItem('access') : null;
    config.headers["Content-Type"]= 'application/json';
    return config;
});

apiAxios.interceptors.response.use(undefined,  async function (error) {
    const originalRequest = error.config;
    if ((error.response.status === 401 || error.response.code === "token_not_valid") && !originalRequest._retry) {
        originalRequest._retry = true;
        const response = await apiAxios.post(api.refreshToken(), {refresh: localStorage.getItem('refresh')});
        console.log(response);
        localStorage.setItem("access", response.data["access"]);
        localStorage.setItem("refresh", response.data["refresh"]);

        return apiAxios(originalRequest);
    } else {
        return Promise.reject({...error, message: error.message});
    }
})

export function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

export default apiAxios;
