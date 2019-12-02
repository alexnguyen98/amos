import { Router } from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import compression from 'compression'
import helmet from 'helmet'
import passport from 'passport'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import './passport'

const middleware = Router()

middleware.use(
  bodyParser.json({ limit: '5mb' }),
  compression(),
  cors({
    origin: "http://localhost:8080",
    credentials: true
  }),
  helmet(),
  cookieParser(),
  passport.initialize(),
  passport.session()
)

if (process.env.NODE_ENV === 'development') {
  middleware.use(morgan("dev"))
}

export default middleware