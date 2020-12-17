import axios from '../utils/axios'

const DeleteCommentHandler = async (data) => {
    return await axios.delete(`comments/${data.id}`, {
        headers: {
            authorization: `Bearer ${data.token}`
        }
    })
}

export default DeleteCommentHandler
