import * as React from 'react';

import {GridColDef, GridValueGetterParams} from '@mui/x-data-grid';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import Button from "@mui/material/Button";

import {getDateWithFormat} from "../../helpers/functions.helpers";
import {deleteUserProp} from "./index";

export const usersColumns = (handleOpenCloseDeleteModal: () => void, selectUser: (prop: deleteUserProp) => void): GridColDef[] => [
    {field: 'id', headerName: 'id', sortable: false, width: 200},
    {
        field: 'name', headerName: 'Name', width: 230,
        valueGetter: (params: GridValueGetterParams) => params.row.name || '-'
    },
    {
        field: 'rocket', headerName: 'Rocket', width: 200,
        valueGetter: (params: GridValueGetterParams) => params.row.rocket || '-'
    },
    {
        field: 'twitter',
        headerName: 'Twitter',
        valueGetter: (params: GridValueGetterParams) => params.row.twitter || '-',
        width: 200
    },
    {
        field: 'timestamp',
        headerName: 'Date registration',
        valueGetter: (params: GridValueGetterParams) => getDateWithFormat(params.row.timestamp),
        width: 230
    },
    {
        field: 'button',
        headerName: '',
        renderCell: (params: GridValueGetterParams) =>
            <Button onClick={() => {
                handleOpenCloseDeleteModal();
                selectUser({id: params.row.id, name: params.row.name});
            }}>
                <DeleteForeverSharpIcon/>
            </Button>,
        width: 60,
        sortable: false,
        type: 'actions',
    }
];
