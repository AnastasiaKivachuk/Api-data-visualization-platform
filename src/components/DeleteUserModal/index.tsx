import React, {useState} from "react";
import styled from "@emotion/styled";

import {Box, Modal} from "@mui/material";
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import Button from "@mui/material/Button";
import LoadingButton from '@mui/lab/LoadingButton'

import {showToast} from "../../helpers/functions.helpers";
import {FORM_FIELDS_ERRORS} from "../../constants/messages.constants";
import {deleteUserMutation} from "../../services/api/users.api";

type Props = {
    onClose: () => void
    isOpen: boolean
    deleteUser: (val: string) => void
    id?: string
    name?: string
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const StyledHeader = styled.div`
  align-content: center;
  display: flex;
  justify-content: space-between;
`

const StyledIcon = styled.div`
  align-content: center;
  display: flex;
  cursor: pointer;
  height: 100%;
`

const StyledWrapButton = styled.div`
  display: flex;
  gap: 10px;
`

const DeleteUserModal = ({onClose, isOpen, deleteUser, id, name}: Props): JSX.Element => {
    const [isLoading, setLoading] = useState(false);

    const onDelete = async () => {
        if (id) {
            setLoading(true)
            try {
                const {data} = await deleteUserMutation(id);
                await deleteUser(data.delete_users.returning[0].id);
                showToast({text: 'User deleted', type: 'success'});
                onClose();
            } catch (error) {
                showToast({text: FORM_FIELDS_ERRORS.DEFAULT_ERROR, type: 'error'});
            } finally {
                setLoading(false)
            }
        }
    };

    return (
        <Modal
            hideBackdrop
            open={isOpen}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
        >
            <Box sx={{...style, width: 400}}>
                <StyledHeader>
                    <h2>Add user</h2>
                    <StyledIcon onClick={onClose}><CloseSharpIcon/>
                    </StyledIcon>
                </StyledHeader>
                <p id="child-modal-description">
                    Do you want to delete user &apos;{name}&apos;?
                </p>
                <StyledWrapButton>
                    <LoadingButton onClick={onDelete} variant={'contained'} loading={isLoading}>Delete</LoadingButton>
                    <Button onClick={onClose} variant={'outlined'}>Cancel</Button>
                </StyledWrapButton>
            </Box>
        </Modal>
    )
}

export default DeleteUserModal;
