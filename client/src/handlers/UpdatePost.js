import axios from '../utils/axios'

const UpdatePostHandler = async (data) => {
    return await axios.patch(`posts/${data.id}`, data.body, {
        headers: {
            authorization: `Bearer ${data.token}`
        }
    })
}

export default UpdatePostHandler
