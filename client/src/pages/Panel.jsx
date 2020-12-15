import { Container, SimpleGrid } from '@chakra-ui/react'

import { Post, CreatePost } from '../components'

const Panel = () => {
    return (
        <Container py={24}>
            <SimpleGrid columns={1} spacing={12}>
                <CreatePost />
                <Post />
            </SimpleGrid>
        </Container>
    )
}

export default Panel
