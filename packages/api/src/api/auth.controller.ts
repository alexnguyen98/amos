import { Router } from 'express'
import passport from 'passport'
import { createAccessToken, createRefreshToken } from '../utils/jwt'
import { verify } from 'jsonwebtoken'
import { User } from '../entity/User'

const router = Router()

router.get('/refresh_token', async (req,res) => {
  try {
    const token = req.cookies['x-token']
    if (!token)
      throw new Error

    const 
      payload:any = verify(token, process.env.REFRESH_TOKEN_SECRET!),
      user = await User.findOne({ id: payload.id, tokenVer: payload.ver })
    
    console.log(payload)
    if (!user)
      throw new Error

    res.cookie('x-token', createRefreshToken(user), {
      httpOnly: true
    })

    return res.send({ ok: true, access_token: createAccessToken(user) })

  } catch(err) {
    return res.send({ ok: false, access_token: '' })
  }
}) 

router.post('/fb', passport.authenticate('facebook-token'), (req,res) => {
  res.cookie('x-token', createRefreshToken(req.user), {
    httpOnly: true
  })
  res.send({
    access_token: createAccessToken(req.user)
  })
})

export default router