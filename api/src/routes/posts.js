import { Router } from 'express'

import { CreatePost, DeletePost, FindPost, PatchPost } from '../controllers'
import Authorization from '../guards/Authorization'

const router = new Router()

router.post('/', Authorization, CreatePost)
router.get('/', Authorization, FindPost)
router.delete('/:id', Authorization, DeletePost)
router.patch('/:id', Authorization, PatchPost)

export default router
