import prisma from '../../utils/PrismaClient'

const Delete = async (req, res) => {
    const { id } = req.params

    const post = await prisma.post.findFirst({
        where: {
            id
        },
        select: {
            authorId: true
        }
    })

    if (post.authorId !== req.userId) {
        return res.json({ error: 'You do not have permission to delete this post.' })
    }

    await prisma.post.delete({
        where: {
            id
        }
    })

    return res.json({ success: 'Post deleted with success.' })
}

export default Delete
