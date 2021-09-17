import {API_URL} from "./constants";

const api = {
    retrieveUser: () => API_URL + "/user/",
    createUser: () => API_URL + "/user/create/",

    getProfile: (username) => API_URL + "/profile/" + username + "/",

    createPuzzle: () => API_URL + "/puzzle/create/",
    checkPuzzle: () => API_URL + "/puzzle/check/",

    obtainToken: () => API_URL + "/token/obtain/",
    refreshToken: () => API_URL + "/token/refresh/",
    blacklistToken: () => API_URL + "/logout/",

    verifyToken: () => API_URL + "/token/verify/",

    hello: () => API_URL + "/hello/",
}

export default api;