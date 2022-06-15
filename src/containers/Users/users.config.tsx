import * as React from 'react';

import {GridColDef, GridValueGetterParams} from '@mui/x-data-grid';

import {getDateWithFormat} from "../../helpers/functions.helpers";

export const usersColumns: GridColDef[] = [
    {field: 'id', headerName: 'id', sortable: false, width: 200},
    {
        field: 'name', headerName: 'Name', width: 230,
        valueGetter: (params: GridValueGetterParams) => params.row.name || '-'
    },
    {
        field: 'rocket', headerName: 'Rocket', width: 230,
        valueGetter: (params: GridValueGetterParams) => params.row.rocket || '-'
    },
    {
        field: 'twitter',
        headerName: 'Twitter',
        valueGetter: (params: GridValueGetterParams) => params.row.twitter || '-',
        width: 230
    },
    {
        field: 'timestamp',
        headerName: 'Date registration',
        valueGetter: (params: GridValueGetterParams) => getDateWithFormat(params.row.timestamp),
        width: 230
    },
];