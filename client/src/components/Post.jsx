import { useState } from 'react'
import { Box, Flex, Avatar, Text, Badge, Button, Divider, ButtonGroup } from '@chakra-ui/react'

import { CommentPost, Comments, PostModal, DeletePostModal } from '../components'

const Panel = ({ post, currentUser, refetch }) => {
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
                        <Avatar src="" />
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
                            <PostModal
                                singlePost={post}
                                refetch={refetch}
                            />
                            <DeletePostModal
                                singleId={post.id}
                                refetch={refetch}
                            />
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
                <CommentPost
                    singleId={post.id}
                    showCreate={showCreate}
                    refetch={refetch}
                    setShowCreate={setShowCreate}
                />
                {common}
                <Comments
                    showComments={showComments}
                    postComments={post.Comment}
                    currentUser={currentUser}
                    refetch={refetch}
                />
            </Box>
        </Box>
    )
}

export default Panel
