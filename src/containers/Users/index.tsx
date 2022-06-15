import React from "react";

import Typography from "@mui/material/Typography";
import {DataGrid} from "@mui/x-data-grid";

import {usersColumns} from "./users.config";
import {UsersInterface} from "../../interfaces/users.interface";

const Users = ({users}: UsersInterface) => {
    return (
        <>
            <Typography variant="h2" textAlign='center'>Users</Typography>

            <div style={{height: 640, width: '100%'}}>
                {(users || [])?.length > 0 ?
                    <DataGrid
                        rows={users || []}
                        columns={usersColumns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                    /> :
                    <Typography variant="h4" textAlign='center'>No Data</Typography>
                }
            </div>

        </>
    )
}

Users.defaultProps = {
    users: []
}

export default Users
