import {
    useDisclosure,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalHeader,
    ModalBody,
    ModalFooter
} from '@chakra-ui/react'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { useMutation } from 'react-query'

import { useStore } from '../store'
import DeletePostHandler from '../handlers/DeletePost'

const DeletePostModal = ({ singleId, refetch }) => {
    const stateToken = useStore(state => state.token)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { mutate } = useMutation(DeletePostHandler, {
        onSuccess: () => {
            refetch()
        }
    })
    const handleOnDelete = (e) => {
        e.preventDefault()
        mutate({
            id: singleId,
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
                colorScheme="pink"
            >
                <RiDeleteBin6Fill />
            </Button>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Delete</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <h1>Are you sure you want to delete this item?</h1>
                        <ModalFooter>
                            <Button
                                colorScheme="pink"
                                mr={3}
                                onClick={handleOnDelete}
                            >
                                Yes
                            </Button>
                            <Button
                                variant="ghost"
                                colorScheme="purple"
                                onClick={onClose}
                            >
                                No
                            </Button>
                        </ModalFooter>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default DeletePostModal
