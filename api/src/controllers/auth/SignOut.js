import prisma from '../../utils/PrismaClient'

const SignOut = async (req, res) => {
    const isOnline = await prisma.user.findFirst({
        where: {
            id: req.userId,
            isOnline: true
        }
    })

    if (isOnline === null) {
        return res.json({ error: 'The user is no longer logged in.' })
    }

    await prisma.user.update({
        where: {
            id: req.userId
        },
        data: {
            isOnline: false
        }
    })
    
    return res.json({ success: 'Successfull sign out.' })
}

export default SignOut
