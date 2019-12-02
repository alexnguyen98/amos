import { sign } from 'jsonwebtoken'
import { User } from '../entity/User'

export const createRefreshToken = (user: User) => sign(
  { id: user.id, ver: user.tokenVer },
  process.env.REFRESH_TOKEN_SECRET!,
  { expiresIn: '7d' }
)

export const createAccessToken = (user: User) => sign(
  { id: user.id }, 
  process.env.ACCESS_TOKEN_SECRET!,
  { expiresIn: '15m' }
)