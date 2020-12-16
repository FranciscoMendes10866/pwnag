import axios from '../utils/axios'

const CreatePostHandler = async (data) => {
    return await axios.post('posts', data.body ,{
        headers: {
            authorization: `Bearer ${data.token}`
        }
    })
}

export default CreatePostHandler
