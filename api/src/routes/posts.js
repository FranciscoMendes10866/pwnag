import { Router } from 'express'

import { Create, Delete, Find, Patch } from '../controllers'
import Authorization from '../guards/Authorization'

const router = new Router()

router.post('/', Authorization, Create)
router.get('/', Authorization, Find)
router.delete('/:id', Authorization, Delete)
router.patch('/:id', Authorization, Patch)

export default router
