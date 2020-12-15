import { useState } from 'react'
import { Box, Flex, Avatar, Text, Badge, Button, Divider, ButtonGroup } from '@chakra-ui/react'

import { CommentPost, Comments, PostModal, DeleteModal } from '../components'

const Panel = ({ post, currentUser }) => {
    const [showCreate, setShowCreate] = useState(false)
    const [showComments, setShowComments] = useState(false)
    const handleCreate = () => setShowCreate(!showCreate)
    const handleComments = () => setShowComments(!showComments)
    let common
    if (showComments && showCreate) {
        common = <Divider mb={4} />
    }
    return (
        <Box>
            <Box p="8" borderWidth="1px" borderRadius={8} shadow="sm">
                <Flex justifyContent="space-between">
                    <Flex>
                        <Avatar src="https://bit.ly/3mmsW3w" />
                        <Box ml="3">
                            <Text fontWeight="bold">
                                {post.User.username}
                            </Text>
                            <Text fontSize="sm">
                                {post.User.isOnline ? (
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
                    {currentUser === post.User.id && (
                        <Flex>
                            <PostModal singlePost={post} />
                            <DeleteModal singleId={post.id} />
                        </Flex>
                    )}
                </Flex>
                <Text mt={8} fontSize="xl" fontWeight="regular" lineHeight="short">
                    {post.content}
                </Text>
                <Flex align="center" mt={8} justifyContent="center">
                    <ButtonGroup isAttached variant="outline">
                        <Button onClick={handleCreate}> Comment </Button>
                        <Button onClick={handleComments}> View comments </Button>
                    </ButtonGroup>
                </Flex>
                <Divider mb={4} mt={4} />
                <CommentPost showCreate={showCreate} />
                {common}
                <Comments
                    showComments={showComments}
                    postComments={post.Comment}
                    currentUser={currentUser}
                />
            </Box>
        </Box>
    )
}

export default Panel
