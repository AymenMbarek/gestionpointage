import axios from "axios"
import accessToken from "./jwt-token-access/accessToken"
import authHeader from "./jwt-token-access/auth-token-header"
//pass new generated access token here
//const token = accessToken
const token = authHeader()
console.log("new t",token)
//apply base url for axios
const API_URL = "http://localhost:8080/"

const axiosApi = axios.create({
  baseURL: API_URL,
})


axiosApi.defaults.headers.common["Authorization"] = token.Authorization

axiosApi.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)

export async function get(url, config = {}) {
  return await axiosApi.get(url, { ...config }).then(response => response.data)
}

export async function post(url, data, config = {}) {
  return axiosApi
    .post(url, { ...data }, { ...config })
    .then(response => response.data)
}

export async function put(url, data, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then(response => response.data)
}

export async function del(url, config = {}) {
  return await axiosApi
    .delete(url, { ...config })
    .then(response => response.data)
}
