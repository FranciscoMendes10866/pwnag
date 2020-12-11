import prisma from '../../utils/PrismaClient'

const Create = async (req, res) => {
    const { id } = req.params
    const { message } = req.body

    const comment = await prisma.comment.create({
        data: {
            message,
            User: { connect: { id: req.userId } },
            Post: { connect: { id: id } },
        }
    })

    return res.json(comment)
}

export default Create
