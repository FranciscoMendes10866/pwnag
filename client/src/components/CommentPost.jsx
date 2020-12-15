import { Box, Collapse, Textarea, Button } from '@chakra-ui/react'
import { RiSendPlane2Fill } from 'react-icons/ri'

const CommentPost = ({ showCreate }) => {
    return (
        <Box mt={4} mb={4}>
            <Collapse startingHeight={0} in={showCreate}>
                <Textarea
                    borderRadius={8}
                    placeholder="Write your comment."
                    size="sm"
                    resize="none"
                />
                <Button variant="outline" colorScheme="purple" mt={4}>
                    <RiSendPlane2Fill />
                    &nbsp;&nbsp;Send
                </Button>
            </Collapse>
        </Box>
    )
}

export default CommentPost
