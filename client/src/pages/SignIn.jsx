import { Flex, Box, Text, Container, FormControl, FormLabel, Input, Button, SimpleGrid } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import axios from '../utils/axios'
import { useStore } from '../store'

const SignInPage = () => {
    const history = useHistory()
    const { setToken, setUsername, setCurrentUser } = useStore()
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const handleOnChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleOnSubmit = async (e) => {
        e.preventDefault()
        await axios.post('auth/sign_in', form)
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
            email: '',
            password: ''
        })
    }
    return (
        <Container maxW="4xl">
            <Flex minH="calc(100vh - 56px)" w="full" justifyContent="center" align="center">
                <SimpleGrid columns={2} spacing={0}>
                    <Box>
                        <Box px={4} py={5}>
                            <Text fontSize="5xl" fontWeight="bold">PWNAG</Text>
                            <Text fontSize="xl" fontWeight="semibold" mt={4}>
                                PWNAG helps you connect and share with the people in your life.
                            </Text>
                            <Text fontSize="md" fontWeight="regular" mt={6}>
                                Not have an account yet? Then create one.
                            </Text>
                            <Button
                                as={Link}
                                to="/"
                                variant="ghost"
                                colorScheme="purple"
                                mt={4}
                            >
                                Sign up
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
                                            <FormLabel>Email</FormLabel>
                                            <Input
                                                onChange={handleOnChange}
                                                value={form.email}
                                                focusBorderColor="purple.200"
                                                name="email"
                                                type='email'
                                                placeholder='Enter your email address'
                                            />
                                        </FormControl>
                                        <FormControl mt={4}>
                                            <FormLabel>Password</FormLabel>
                                            <Input
                                                onChange={handleOnChange}
                                                value={form.password}
                                                focusBorderColor="purple.200"
                                                name="password"
                                                type='password'
                                                placeholder='Enter your password'
                                            />
                                        </FormControl>
                                        <Button
                                            onClick={handleOnSubmit}
                                            width='full'
                                            mt={6}
                                            colorScheme="purple"
                                            size="lg"
                                        >
                                            Sign In
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

export default SignInPage
