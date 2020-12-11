import prisma from '../../utils/PrismaClient'

const Delete = async (req, res) => {
    const { id } = req.params

    const comment = await prisma.comment.findFirst({
        where: {
            id
        },
        select: {
            userId: true
        }
    })
    if (comment.userId !== req.userId) {
        return res.json({ error: 'You do not have permission to delete this comment.' })
    }

    await prisma.comment.delete({
        where: {
            id
        }
    })

    return res.json({ success: 'Comment deleted with success.' })
}

export default Delete
