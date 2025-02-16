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
import { useMutation } from 'react-query'

import { useStore } from '../store'
import UpdateCommentHandler from '../handlers/UpdateComment'

const CommentModal = ({ singleComment, refetch }) => {
    const stateToken = useStore(state => state.token)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [form, setForm] = useState({
        message: singleComment.message,
    })
    const { mutate } = useMutation(UpdateCommentHandler, {
        onSuccess: () => {
            refetch()
        }
    })
    const handleOnChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleOnSubmit = (e) => {
        e.preventDefault()
        mutate({
            id: singleComment.id,
            body: form,
            token: stateToken
        })
        onClose()
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
                            <Button
                                colorScheme="purple"
                                mr={3}
                                onClick={handleOnSubmit}
                            >
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
