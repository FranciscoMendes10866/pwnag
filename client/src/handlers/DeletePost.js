import axios from '../utils/axios'

const DeletePostHandler = async (data) => {
    return await axios.delete(`posts/${data.id}` ,{
        headers: {
            authorization: `Bearer ${data.token}`
        }
    })
}

export default DeletePostHandler
