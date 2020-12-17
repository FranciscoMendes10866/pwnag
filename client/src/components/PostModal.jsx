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
import UpdatePostHandler from '../handlers/UpdatePost'

const PostModal = ({ singlePost, refetch }) => {
    const stateToken = useStore(state => state.token)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [form, setForm] = useState({
        content: singlePost.content,
    })
    const { mutate } = useMutation(UpdatePostHandler, {
        onSuccess: () => {
            refetch()
        }
    })
    const handleOnChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleOnUpdate = (e) => {
        e.preventDefault()
        mutate({
            id: singlePost.id,
            body: form,
            token: stateToken
        })
        setForm({
            content: '',
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
                            <Button
                                colorScheme="purple"
                                mr={3}
                                onClick={handleOnUpdate}
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

export default PostModal
