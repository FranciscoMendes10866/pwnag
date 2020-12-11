import prisma from '../../utils/PrismaClient'

const Find = async (req, res) => {
    const online = await prisma.user.findMany({
        where: {
            isOnline: true,
        },
        select: {
            id: true,
            username: true
        }
    })
    return res.json(online)
}

export default Find
