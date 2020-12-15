import { Box, Textarea, Button } from '@chakra-ui/react'
import { CgAddR } from 'react-icons/cg'

const CreatePost = () => {
    return (
        <Box p="8" borderWidth="1px" borderRadius={8} shadow="sm">
            <Textarea
                borderRadius={8}
                placeholder="Write the content of your post."
                size="sm"
                resize="none"
            />
            <Button variant="outline" colorScheme="purple" mt={4}>
                <CgAddR />
                    &nbsp;&nbsp;Create
                </Button>
        </Box>
    )
}

export default CreatePost
