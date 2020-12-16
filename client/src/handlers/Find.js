import axios from '../utils/axios'

const Find = async ({ queryKey }) => {
    return await axios.get('posts', {
        headers: {
            authorization: `Bearer ${queryKey[1].token}`
        }
    })
}

export default Find
