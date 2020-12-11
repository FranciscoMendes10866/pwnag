import prisma from '../../utils/PrismaClient'

const Patch = async (req, res) => {
    const { id } = req.params
    const { message } = req.body

    const comment = await prisma.comment.findFirst({
        where: {
            id
        },
        select: {
            userId: true
        }
    })

    if (comment.userId !== req.userId) {
        return res.json({ error: 'You do not have permission to update this comment.' })
    }

    const update = await prisma.comment.update({
        where: {
            id
        },
        data: {
            message
        }
    })

    return res.json(update)
}

export default Patch
