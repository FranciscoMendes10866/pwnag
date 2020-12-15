import { Box, Flex, Avatar, Badge, Text, Button, Collapse } from '@chakra-ui/react'
import { RiDeleteBin6Fill, RiEditBoxLine } from 'react-icons/ri'

const Comments = ({ showComments, postComments, currentUser }) => {
    return (
        <Collapse startingHeight={0} in={showComments}>
            {postComments.map(comment => {
                return (
                    <Box p="6" borderWidth="1px" borderRadius={8} mt={4} mb={4}>
                        <Flex justifyContent="space-between">
                            <Flex>
                                <Avatar size="md" src="https://bit.ly/3nqaxnQ" />
                                <Box ml="3">
                                    <Text fontWeight="bold">
                                        {comment.User.username}
                                    </Text>
                                    <Text fontSize="sm">
                                        {comment.User.isOnline ? (
                                            <Badge ml="1" colorScheme="purple">
                                                Online
                                            </Badge>
                                        ) : (
                                                <Badge ml="1">
                                                    Offline
                                                </Badge>
                                            )}
                                    </Text>
                                </Box>
                            </Flex>
                            {currentUser === comment.User.id && (
                                <Flex>
                                    <Button variant="ghost" size="sm" colorScheme="blue">
                                        <RiEditBoxLine />
                                    </Button>
                                    <Button variant="ghost" ml={2} size="sm" colorScheme="pink">
                                        <RiDeleteBin6Fill />
                                    </Button>
                                </Flex>
                            )}
                        </Flex>
                        <Text mt={6} fontSize="lg" fontWeight="regular" lineHeight="short">
                            {comment.message}
                        </Text>
                    </Box>
                )
            })}
        </Collapse>
    )
}

export default Comments
