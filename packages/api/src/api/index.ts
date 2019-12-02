import { Router } from 'express'
import auth from './auth.controller'
import user from './user.controller'

const router = Router()

router.use('/auth', auth)
router.use('/user', user)

export default router 