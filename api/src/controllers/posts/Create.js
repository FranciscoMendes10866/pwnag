import prisma from '../../utils/PrismaClient'

const Create = async (req, res) => {
    const { content } = req.body

    const create = await prisma.post.create({
        data: {
            content,
            User: { connect: { id: req.userId } }
        }
    })

    return res.json(create)
}

export default Create
