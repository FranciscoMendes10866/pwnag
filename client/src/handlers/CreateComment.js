import axios from '../utils/axios'

const CreateCommentHandler = async (data) => {
    return await axios.post(`comments/${data.id}`, data.body, {
        headers: {
            authorization: `Bearer ${data.token}`
        }
    })
}

export default CreateCommentHandler
