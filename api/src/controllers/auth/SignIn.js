import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

import prisma from '../../utils/PrismaClient'

const SignIn = async (req, res) => {
    const { email, password } = req.body

    const exists = await prisma.user.findFirst({
        where: {
            email
        }
    })

    if (exists === null) {
        return res.json({ error: 'Account doesn\'t exist.' })
    }

    const val = await compare(password, exists.password)

    if (!val) {
        return res.json({ error: 'Password doesn\'t match.' })
    }

    const token = sign({ id: exists.id }, 'BR07tfDoPlRRjJA')

    await prisma.user.update({
        where: {
            id: exists.id
        },
        data: {
            isOnline: true
        }
    })

    return res.json({
        token,
        username: exists.username
    })
}

export default SignIn
