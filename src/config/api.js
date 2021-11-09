import {API_URL} from "./constants";

const api = {
    retrieveUser: () => API_URL + "/user/",
    createUser: () => API_URL + "/user/create/",
    searchUsers: () => API_URL + "/user/search/",

    getProfile: (username) => API_URL + "/profile/" + username + "/",
    followOrUnfollow: () => API_URL + "/user/follow/",
    deleteSolution: () => API_URL + "/solution/delete/",
    getFollowers: (username) => API_URL + "/user/" + username + "/followers/",
    getFollowing: (username) => API_URL + "/user/" + username + "/following/",

    createPuzzle: () => API_URL + "/puzzle/create/",
    checkPuzzle: () => API_URL + "/puzzle/check/",
    getPuzzle: (id) => API_URL + "/puzzle/" + id + "/",
    completePuzzle: (id) => API_URL + "/puzzle/solved/" + id + "/",
    deletePuzzle: () => API_URL + "/puzzle/delete/",
    savePuzzle: () => API_URL + "/puzzle/save/",
    searchPuzzles: () => API_URL + "/puzzle/search/",

    obtainToken: () => API_URL + "/token/obtain/",
    refreshToken: () => API_URL + "/token/refresh/",
    blacklistToken: () => API_URL + "/logout/",
}

export default api;