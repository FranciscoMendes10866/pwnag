import { Box, Flex, Avatar, Badge, Text, Button, Collapse } from '@chakra-ui/react'
import { RiDeleteBin6Fill, RiEditBoxLine } from 'react-icons/ri'

const Comments = ({ showComments }) => {
    return (
        <Collapse startingHeight={0} in={showComments}>
            <Box p="6" borderWidth="1px" borderRadius={8}>
                <Flex justifyContent="space-between">
                    <Flex>
                        <Avatar size="md" src="https://bit.ly/3nqaxnQ" />
                        <Box ml="3">
                            <Text fontWeight="bold">
                                rogermercs99
                                    </Text>
                            <Text fontSize="sm">
                                <Badge ml="1">
                                    Offline
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
                <Text mt={6} fontSize="lg" fontWeight="regular" lineHeight="short">
                    This is the message that we will read in the comments.
            </Text>
            </Box>
        </Collapse>
    )
}

export default Comments
