import prisma from '../../utils/PrismaClient'

const Patch = async (req, res) => {
    const { id } = req.params
    const { content } = req.body

    const post = await prisma.post.findFirst({
        where: {
            id
        },
        select: {
            authorId: true
        }
    })

    if (post.authorId !== req.userId) {
        return res.json({ error: 'You do not have permission to update this post.' })
    }

    const update = await prisma.post.update({
        where: {
            id
        },
        data: {
            content
        }
    })

    return res.json(update)
}

export default Patch
