import React, {ChangeEventHandler} from "react";
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {Controller} from 'react-hook-form';
import styled from "@emotion/styled";

import {Box, FormControl, Modal, TextField} from "@mui/material";
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import LoadingButton from '@mui/lab/LoadingButton'

import {FIELD_NAMES, schema} from "./validation";
import {showToast} from "../../helpers/functions.helpers";
import {FORM_FIELDS_ERRORS} from "../../constants/messages.constants";
import {mutateUser} from "../../services/api/users.api";
import {UserMutateObjectInterface} from "../../interfaces/users.interface";

type Props = {
    onClose: () => void
    isOpen: boolean
    addNewUser: (val: UserMutateObjectInterface[]) => void
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

const StyledErrorMessage = styled.div`
  color: red;
`

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

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`


const AddUserModal = ({onClose, isOpen, addNewUser}: Props): JSX.Element => {
    const {
        setValue, handleSubmit, setError, control, formState: {isSubmitting}
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            [FIELD_NAMES.NAME]: '',
            [FIELD_NAMES.ROCKET]: '',
            [FIELD_NAMES.TWITTER]: '',
        },
    });

    const onSubmit = async (data: any) => {
        try {
            const result = await mutateUser(data);
            addNewUser(result.data.insert_users.returning);
            showToast({text: 'Created new user', type: 'success'});
            onClose();
        } catch (error) {
            showToast({text: FORM_FIELDS_ERRORS.DEFAULT_ERROR, type: 'error'});
        }
    };

    const onValueChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
        setError(event.target.name, {message: ''});
        setValue(event.target.name, event.target.value);
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
                <StyledForm onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name={FIELD_NAMES.NAME}
                        control={control}
                        render={({field: {value}, fieldState: {error}}) => (
                            <>
                                <FormControl variant="standard" fullWidth>
                                    <TextField
                                        label="Name"
                                        variant="standard"
                                        name={FIELD_NAMES.NAME}
                                        value={value}
                                        onChange={onValueChange}
                                        error={!!error?.message}
                                    />
                                </FormControl>
                                {error?.message && <StyledErrorMessage>{error?.message}</StyledErrorMessage>}
                            </>)}/>

                    <Controller
                        name={FIELD_NAMES.ROCKET}
                        control={control}
                        render={({field: {value}, fieldState: {error}}) => (
                            <>
                                <FormControl variant="standard" fullWidth>
                                    <TextField
                                        label="Rocket"
                                        variant="standard"
                                        name={FIELD_NAMES.ROCKET}
                                        value={value}
                                        onChange={onValueChange}
                                        error={!!error?.message}
                                    />
                                </FormControl>
                                {error?.message && <StyledErrorMessage>{error?.message}</StyledErrorMessage>}
                            </>)}/>

                    <Controller
                        name={FIELD_NAMES.TWITTER}
                        control={control}
                        render={({field: {value}, fieldState: {error}}) => (
                            <>
                                <FormControl variant="standard" fullWidth>
                                    <TextField
                                        label="Twitter"
                                        variant="standard"
                                        name={FIELD_NAMES.TWITTER}
                                        value={value}
                                        onChange={onValueChange}
                                        error={!!error?.message}
                                    />
                                </FormControl>
                                {error?.message && <StyledErrorMessage>{error?.message}</StyledErrorMessage>}</>)}/>
                    <LoadingButton onClick={handleSubmit(onSubmit)} variant={'outlined'} disabled={isSubmitting}
                                   loading={isSubmitting}> Save
                    </LoadingButton>
                </StyledForm>
            </Box>
        </Modal>
    )
}

export default AddUserModal;
