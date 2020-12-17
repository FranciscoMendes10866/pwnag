import { Box, Collapse, Textarea, Button } from '@chakra-ui/react'
import { RiSendPlane2Fill } from 'react-icons/ri'
import { useState } from 'react'
import { useMutation } from 'react-query'

import { useStore } from '../store'
import CreateCommentHandler from '../handlers/CreateComment'

const CommentPost = ({ showCreate, refetch, singleId, setShowCreate }) => {
    const stateToken = useStore(state => state.token)
    const [form, setForm] = useState({
        message: ''
    })
    const handleOnChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value })
    }
    const { mutate } = useMutation(CreateCommentHandler, {
        onSuccess: () => {
            refetch()
        }
    })
    const handleOnSubmit = (e) => {
        e.preventDefault()
        mutate({
            id: singleId,
            body: form,
            token: stateToken
        })
        setForm({
            message: ''
        })
        setShowCreate(false)
    }
    return (
        <Box mt={4} mb={4}>
            <Collapse startingHeight={0} in={showCreate}>
                <Textarea
                    value={form.message}
                    onChange={handleOnChange}
                    id="message"
                    borderRadius={8}
                    placeholder="Write your comment."
                    size="sm"
                    resize="none"
                />
                <Button
                    variant="outline"
                    colorScheme="purple"
                    mt={4}
                    onClick={handleOnSubmit}
                >
                    <RiSendPlane2Fill />
                    &nbsp;&nbsp;Send
                </Button>
            </Collapse>
        </Box>
    )
}

export default CommentPost
