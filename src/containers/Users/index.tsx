import React, {useCallback, useState} from "react";
import dynamic from "next/dynamic";
import styled from "@emotion/styled";

import Typography from "@mui/material/Typography";
import {DataGrid} from "@mui/x-data-grid";
import Button from "@mui/material/Button";

import {usersColumns} from "./users.config";
import {UserMutateObjectInterface, UsersInterface} from "../../interfaces/users.interface";

const AddUserModal = dynamic(() => import('../../components/AddUserModal'));
const DeleteUserModal = dynamic(() => import('../../components/DeleteUserModal'))

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`

export type deleteUserProp = {
    id: string
    name: string
}

const Users = ({users}: UsersInterface) => {
    const [allUsers, setUsers] = useState(users);
    const [isOpen, setOpen] = React.useState(false);
    const [isOpenDeleteModal, setOpenDeleteModal] = React.useState(false);
    const [selectedUser, selectUser] = React.useState<null | deleteUserProp>(null);

    const handleOpenCloseDeleteModal = useCallback(() => setOpenDeleteModal(!isOpenDeleteModal), [isOpenDeleteModal]);

    const handleOpenClose = useCallback(() => setOpen(!isOpen), [isOpen]);

    // @ts-ignore
    const addNewUser = useCallback((user: UserMutateObjectInterface[]) => setUsers((prevState) => ([...user, ...prevState])), [setUsers])

    const deleteUser = useCallback((id: string) => setUsers((prevState) => prevState?.filter(item => item.id !== id)), [setUsers])


    return (
        <Wrapper>
            <Typography variant="h2" textAlign='center'>Users</Typography>

            <Button variant='contained' onClick={handleOpenClose}>Add User</Button>

            <div style={{height: 640, width: '100%'}}>
                {(allUsers || [])?.length > 0 ?
                    <DataGrid
                        rows={allUsers || []}
                        columns={usersColumns(handleOpenCloseDeleteModal, selectUser)}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                    /> :
                    <Typography variant="h4" textAlign='center'>No Data</Typography>
                }
            </div>
            <AddUserModal isOpen={isOpen} onClose={handleOpenClose} addNewUser={addNewUser}/>
            <DeleteUserModal isOpen={isOpenDeleteModal} onClose={handleOpenCloseDeleteModal}
                             deleteUser={deleteUser} {...selectedUser}/>
        </Wrapper>
    )
}

Users.defaultProps = {
    users: []
}

export default Users
