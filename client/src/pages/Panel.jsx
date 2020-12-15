import { Container, SimpleGrid } from '@chakra-ui/react'

import { Post, CreatePost } from '../components'

const Panel = () => {
    const currentUser = 'ckikg80le0002rp3vzx04wnof'
    const data = [
        {
            "id": "ckiki4wzg0000k03ve435dwyg",
            "content": "Updated second post.",
            "User": {
                "id": "ckikg80le0002rp3vzx04wnof",
                "username": "franciscomendes97",
                "isOnline": true
            },
            "Comment": [
                {
                    "id": "ckiq7o9eo0060843vu01b0xdg",
                    "message": "Comment to second post.",
                    "User": {
                        "id": "ckiq7li490013843vsx5fjl1s",
                        "username": "rogermercs99",
                        "isOnline": false
                    }
                }
            ]
        },
        {
            "id": "ckiq7m96a0023843vlhel0zq3",
            "content": "Roger Post.",
            "User": {
                "id": "ckiq7li490013843vsx5fjl1s",
                "username": "rogermercs99",
                "isOnline": false
            },
            "Comment": [
                {
                    "id": "ckiq7nes70046843vdhnf386p",
                    "message": "Comment to roger post.",
                    "User": {
                        "id": "ckikg80le0002rp3vzx04wnof",
                        "username": "franciscomendes97",
                        "isOnline": true
                    }
                },
                {
                    "id": "ckiq8lxg20005ep3vi4zgqxom",
                    "message": "I commented on Roger's post.",
                    "User": {
                        "id": "ckiq8l30u0001ep3v9bwdawiu",
                        "username": "joaogomes98",
                        "isOnline": true
                    }
                }
            ]
        }
    ]

    return (
        <Container py={24}>
            <SimpleGrid columns={1} spacing={12}>
                <CreatePost />
                {data.map(post => {
                    return <Post key={post.id} post={post} currentUser={currentUser} />
                })}
            </SimpleGrid>
        </Container>
    )
}

export default Panel
