import axios from 'axios'
import jwtDecode from 'jwt-decode'

const api = axios.create()
let token;
let dispatch;

api.interceptors.request.use(async config => {
  const { exp } = jwtDecode(token)
  if (Date.now() >= exp * 1000) {
    const response = await axios.get('http://localhost:3000/api/auth/refresh_token', {
      withCredentials: true
    })
    await dispatch({
      type: 'SET_ACCESS_TOKEN', 
      payload: response.data.access_token
    })
    config.headers["authorization"] = `Bearer ${response.data.access_token}`
  }
  return config
})

export default {
  get: async ({ store }, endpoint) => {
    try {
      token = store.getState().auth.accessToken
      if(!token) { return }
      dispatch = store.dispatch
      const response = await api.get(`http://localhost:3000/api/${endpoint}`, {
        headers: { "authorization": `Bearer ${token}`}
      })
      return response.data
    } catch(err) {
      console.log(err)
    }
  }
}