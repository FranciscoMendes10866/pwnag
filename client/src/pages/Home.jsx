import { Flex, Box, Text, Container, FormControl, FormLabel, Input, Button, SimpleGrid } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import axios from '../utils/axios'
import { useStore } from '../store'

const Home = () => {
    const history = useHistory()
    const { setToken, setUsername, setCurrentUser } = useStore()
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: ''
    })
    const handleOnChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('auth/sign_up', form)
            .then(({ data }) => {
                if (data.token) {
                    setToken(data.token)
                    setUsername(data.username)
                    setCurrentUser(data.id)
                    history.push('/panel')
                }
            })
            .catch(err => console.log(err))
        setForm({
            username: '',
            email: '',
            password: ''
        })
    }
    return (
        <Container maxW="4xl">
            <Flex minH="calc(100vh - 56px)" w="full" justifyContent="center" align="center">
                <SimpleGrid columns={2} spacing={0}>
                    <Box>
                        <Box px={4} py={16}>
                            <Text fontSize="5xl" fontWeight="bold">PWNAG</Text>
                            <Text fontSize="xl" fontWeight="semibold" mt={4}>
                                PWNAG helps you connect and share with the people in your life.
                            </Text>
                            <Text fontSize="md" fontWeight="regular" mt={6}>
                                Already have an account? Then start your session.
                            </Text>
                            <Button
                                as={Link}
                                to="/sign-in"
                                variant="ghost"
                                colorScheme="purple"
                                mt={4}
                            >
                                Sign in
                            </Button>
                        </Box>
                    </Box>
                    <Box>
                        <Box
                            borderWidth={1}
                            px={4}
                            width='full'
                            maxWidth='500px'
                            borderRadius={8}
                            textAlign='center'
                            boxShadow='lg'
                        >
                            <Box p={4}>
                                <Box my={4} textAlign='left'>
                                    <form>
                                        <FormControl>
                                            <FormLabel>Username</FormLabel>
                                            <Input
                                                value={form.username}
                                                onChange={handleOnChange}
                                                id="username"
                                                focusBorderColor="purple.200"
                                                type='text'
                                                placeholder='Enter your username'
                                            />
                                        </FormControl>
                                        <FormControl mt={4}>
                                            <FormLabel>Email</FormLabel>
                                            <Input
                                                value={form.email}
                                                onChange={handleOnChange}
                                                id="email"
                                                focusBorderColor="purple.200"
                                                type='email'
                                                placeholder='Enter your email address'
                                            />
                                        </FormControl>
                                        <FormControl mt={4}>
                                            <FormLabel>Password</FormLabel>
                                            <Input
                                                value={form.password}
                                                onChange={handleOnChange}
                                                id="password"
                                                focusBorderColor="purple.200"
                                                type='password'
                                                placeholder='Enter your password'
                                            />
                                        </FormControl>
                                        <Button
                                            onClick={handleSubmit}
                                            width='full'
                                            mt={6}
                                            colorScheme="purple"
                                            size="lg"
                                        >
                                            Create New Account
                                        </Button>
                                    </form>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </SimpleGrid>
            </Flex>
        </Container>
    )
}

export default Home
