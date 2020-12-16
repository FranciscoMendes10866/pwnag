import { Box, Flex, Avatar, Badge, Text, Collapse } from '@chakra-ui/react'

import { CommentModal, DeletePostModal } from '.'

const Comments = ({ showComments, postComments, currentUser }) => {
    return (
        <Collapse startingHeight={0} in={showComments}>
            {postComments.map(comment => {
                return (
                    <Box key={comment.id} p="6" borderWidth="1px" borderRadius={8} mt={4} mb={4}>
                        <Flex justifyContent="space-between">
                            <Flex>
                                <Avatar size="md" src="" />
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
                                    <CommentModal singleComment={comment} />
                                    <DeletePostModal singleId={comment.id} />
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
