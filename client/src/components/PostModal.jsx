import {
    useDisclosure,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalHeader,
    ModalBody,
    FormControl,
    Input,
    ModalFooter
} from '@chakra-ui/react'
import { RiEditBoxLine } from 'react-icons/ri'
import { useState } from 'react'

const PostModal = ({ singlePost }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [form, setForm] = useState({
        content: singlePost.content,
    })
    const handleOnChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <>
            <Button
            onClick={onOpen}
            variant="ghost"
            size="sm"
            colorScheme="blue"
            >
                <RiEditBoxLine />
            </Button>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit Post</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <Input
                                name="content"
                                value={form.content}
                                placeholder="Write the post content."
                                onChange={handleOnChange}
                            />
                        </FormControl>
                        <ModalFooter>
                            <Button colorScheme="purple" mr={3}>
                                Edit
                            </Button>
                            <Button
                                variant="ghost"
                                colorScheme="purple"
                                onClick={onClose}
                            >
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default PostModal
