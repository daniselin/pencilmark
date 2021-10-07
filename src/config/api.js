import {API_URL} from "./constants";

const api = {
    retrieveUser: () => API_URL + "/user/",
    createUser: () => API_URL + "/user/create/",
    searchUsers: () => API_URL + "/user/search/",

    getProfile: (username) => API_URL + "/profile/" + username + "/",

    createPuzzle: () => API_URL + "/puzzle/create/",
    checkPuzzle: () => API_URL + "/puzzle/check/",
    getPuzzle: (id) => API_URL + "/puzzle/" + id + "/",
    completePuzzle: (id) => API_URL + "/puzzle/solved/" + id + "/",

    obtainToken: () => API_URL + "/token/obtain/",
    refreshToken: () => API_URL + "/token/refresh/",
    blacklistToken: () => API_URL + "/logout/",

    verifyToken: () => API_URL + "/token/verify/",

    hello: () => API_URL + "/hello/",
}

export default api;