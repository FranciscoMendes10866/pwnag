import { Flex, Box, Text, Container, FormControl, FormLabel, Input, Button, SimpleGrid } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const SignInPage = () => {
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
                                                focusBorderColor="purple.200"
                                                name="email"
                                                type='email'
                                                placeholder='Enter your email address'
                                            />
                                        </FormControl>
                                        <FormControl mt={4}>
                                            <FormLabel>Password</FormLabel>
                                            <Input
                                                focusBorderColor="purple.200"
                                                name="password"
                                                type='password'
                                                placeholder='Enter your password'
                                            />
                                        </FormControl>
                                        <Button
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
