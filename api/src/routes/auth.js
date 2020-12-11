import { Router } from 'express'

import { SignIn, SignOut, SignUp } from '../controllers'
import Authorization from '../guards/Authorization'

const router = new Router()

router.post('/sign_up', SignUp)
router.post('/sign_in', SignIn)
router.patch('/sign_out', Authorization, SignOut)

export default router
