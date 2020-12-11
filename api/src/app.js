import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'

import { authRouter } from './routes'

const app = express()

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(compression())
app.use('/api/auth', authRouter)

export default app
