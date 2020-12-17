import axios from '../utils/axios'

const UpdateCommentHandler = async (data) => {
    return await axios.patch(`comments/${data.id}`, data.body, {
        headers: {
            authorization: `Bearer ${data.token}`
        }
    })
}

export default UpdateCommentHandler
