import { Router } from 'express'
import auth from '../middlewares/auth'

const router = Router()

router.get('/', auth, (req,res) => {
  res.status(200).send({
    id: res.locals.user.id
  })
})

export default router