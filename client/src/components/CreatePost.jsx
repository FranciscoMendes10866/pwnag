import { Box, Textarea, Button } from '@chakra-ui/react'
import { CgAddR } from 'react-icons/cg'
import { useMutation } from 'react-query'
import { useState } from 'react'

import { useStore } from '../store'
import CreatePostHandler from '../handlers/CreatePost'

const CreatePost = ({ refetch }) => {
    const [form, setForm] = useState({
        content: ''
    })
    const stateToken = useStore(state => state.token)
    const { mutate } = useMutation(CreatePostHandler, {
        onSuccess: () => {
            refetch()
        }
    })
    const handleOnChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value })
    }
    const handleOnSubmit = (e) => {
        e.preventDefault()
        mutate({
            body: form,
            token: stateToken
        })
    }
    return (
        <Box p="8" borderWidth="1px" borderRadius={8} shadow="sm">
            <Textarea
                value={form.content}
                onChange={handleOnChange}
                borderRadius={8}
                id="content"
                placeholder="Write the content of your post."
                size="sm"
                resize="none"
            />
            <Button
                onClick={handleOnSubmit}
                variant="outline"
                colorScheme="purple"
                mt={4}
            >
                <CgAddR />
                    &nbsp;&nbsp;Create
                </Button>
        </Box>
    )
}

export default CreatePost
