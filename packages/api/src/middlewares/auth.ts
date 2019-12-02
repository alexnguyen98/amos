import { Request, Response, NextFunction } from "express"
import { verify } from 'jsonwebtoken'

export default (req:Request,res: Response, next: NextFunction) => {
  const authorsation = req.headers['authorization']
  if (!authorsation)
    return res.status(401).send('Access denied. No token provided')
  
  try {
    const
      token = authorsation!.split(' ')[1]!,
      payload = verify(token, process.env.ACCESS_TOKEN_SECRET!)
    res.locals.user = payload
    next()

  } catch(err) {
    res.status(404).send('Not authorised')
  }
}