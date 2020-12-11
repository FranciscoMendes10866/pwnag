import prisma from '../../utils/PrismaClient'

const Find = async (req, res) => {
    const posts = await prisma.post.findMany()
    return res.json(posts)
}

export default Find
