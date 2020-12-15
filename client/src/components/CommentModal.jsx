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

const CommentModal = ({ singleComment }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [form, setForm] = useState({
        message: singleComment.message,
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
                    <ModalHeader>Edit Comment</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <Input
                                name="message"
                                value={form.message}
                                placeholder="Write the comment content."
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

export default CommentModal
