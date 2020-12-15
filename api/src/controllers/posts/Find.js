import prisma from '../../utils/PrismaClient'

const Find = async (req, res) => {
    const posts = await prisma.post.findMany({
        select: {
            id: true,
            content: true,
            User: {
                select: {
                    id: true,
                    username: true,
                    isOnline: true,
                }
            },
            Comment: {
                select: {
                    id: true,
                    message: true,
                    User: {
                        select: {
                            id: true,
                            username: true,
                            isOnline: true,
                        }
                    }
                }
            }
        }
    })
    return res.json(posts)
}

export default Find
