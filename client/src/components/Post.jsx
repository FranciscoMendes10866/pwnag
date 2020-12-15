import { useState } from 'react'
import { Box, Flex, Avatar, Text, Badge, Button, Divider, ButtonGroup } from '@chakra-ui/react'
import { RiDeleteBin6Fill, RiEditBoxLine } from 'react-icons/ri'

import { CommentPost, Comments } from '../components'

const Panel = () => {
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
                                franciscomendes97
                            </Text>
                            <Text fontSize="sm">
                                <Badge ml="1" colorScheme="purple">
                                    Online
                                </Badge>
                            </Text>
                        </Box>
                    </Flex>
                    <Flex>
                        <Button variant="ghost" size="sm" colorScheme="blue">
                            <RiEditBoxLine />
                        </Button>
                        <Button variant="ghost" ml={2} size="sm" colorScheme="pink">
                            <RiDeleteBin6Fill />
                        </Button>
                    </Flex>
                </Flex>
                <Text mt={8} fontSize="xl" fontWeight="regular" lineHeight="short">
                    This space is where you will see the content of each post.
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
                <Comments showComments={showComments} />
            </Box>
        </Box>
    )
}

export default Panel
