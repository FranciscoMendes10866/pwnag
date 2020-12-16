import { Container, SimpleGrid } from '@chakra-ui/react'
import { useQuery } from 'react-query'

import { Post, CreatePost, PostMessages } from '../components'
import { useStore } from '../store'
import Find from '../handlers/Find'

const Panel = () => {
    const currentUser = useStore(state => state.currentUser)
    const stateToken = useStore(state => state.token)
    const { data, isError, isLoading, isFetching, isFetched, refetch } = useQuery(['posts', { token: stateToken }], Find)
    return (
        <Container py={24}>
            <SimpleGrid columns={1} spacing={12}>
                <CreatePost refetch={refetch} />
                <PostMessages
                    isError={isError}
                    isLoading={isLoading}
                    isFetching={isFetching}
                />
                {isFetched && (
                    data.data.map(post => {
                        return <Post
                            key={post.id}
                            post={post}
                            currentUser={currentUser}
                            refetch={refetch}
                        />
                    })
                )}
            </SimpleGrid>
        </Container>
    )
}

export default Panel
