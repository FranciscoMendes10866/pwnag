import { Router } from 'express'

import { FindOnlineUsers } from '../controllers'
import Authorization from '../guards/Authorization'

const router = new Router()

router.get('/', Authorization, FindOnlineUsers)

export default router
