import { Box, Text } from '@chakra-ui/react'

const PostMessages = ({ isError, isLoading, isFetching }) => {
    return (
        <Box textAlign="center">
            {isError && (
                <Text>An error occurred while we were looking for new publications.</Text>
            )}
            {isLoading && (
                <Text>New publications have been found and are now being loaded.</Text>
            )}
            {isFetching && (
                <Text>Looking for new publications, please wait.</Text>
            )}
        </Box>
    )
}

export default PostMessages
