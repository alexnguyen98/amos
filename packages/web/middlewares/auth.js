import axios from 'axios'
import cookie from 'cookie'

const isServer = () => typeof window === "undefined";

export default async (ctx) => {
  if (isServer()) {
    const cookies = await cookie.parse(`${ctx.req.headers.cookie}`)
    if (cookies['x-token']) {
      const response = await axios.get('http://localhost:3000/api/auth/refresh_token', {
        withCredentials: true,
        headers: {
          Cookie: `x-token=${cookies['x-token']}`
        }
      })
      ctx.store.dispatch({ 
        type: 'SET_ACCESS_TOKEN', 
        payload: response.data.access_token
      })
    }
  }
}