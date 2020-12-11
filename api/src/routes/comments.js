import { Router } from 'express'

import { CreateComment, DeleteComment, PatchComment } from '../controllers'
import Authorization from '../guards/Authorization'

const router = new Router()

router.post('/:id', Authorization, CreateComment)
router.delete('/:id', Authorization, DeleteComment)
router.patch('/:id', Authorization, PatchComment)

export default router
