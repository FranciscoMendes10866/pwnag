import { Flex, Box, Button, Heading, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { DiMaterializecss } from 'react-icons/di'
import { HiColorSwatch, HiOutlineColorSwatch } from 'react-icons/hi'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const bg = useColorModeValue("white", "gray.800")
    return (
        <Flex
            position="fixed"
            backgroundColor={bg}
            width="100%"
            zIndex="999"
            shadow="sm"
            justify="space-between"
            align="center"
            direction="row"
            py={2}
            px={4}
        >
            <Box p="2">
                <Heading size="md">
                    <DiMaterializecss />
                </Heading>
            </Box>
            <Box>
                <Button as={Link} to="/panel" colorScheme="purple" variant="ghost" mr="4">
                    Home
                </Button>
                <Button as={Link} to="/" colorScheme="purple" variant="ghost" mr="4">
                    Sign up
                </Button>
                <Button as={Link} to="/sign-in" colorScheme="purple" variant="ghost" mr="4">
                    Sign in
                </Button>
                <Button colorScheme="purple" variant="ghost" mr="4">
                    Sign out
                </Button>
                <Button colorScheme="purple" ml="4" onClick={toggleColorMode}>
                    {colorMode === "light" ? <HiColorSwatch /> : <HiOutlineColorSwatch />}
                    &nbsp;{colorMode === "light" ? "Dark" : "Light"}
                </Button>
            </Box>
        </Flex>
    )
}

export default Navbar
