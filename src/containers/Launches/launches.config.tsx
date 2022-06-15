import * as React from 'react';

import {GridColDef, GridValueGetterParams} from '@mui/x-data-grid';

import {getDateWithFormat} from "../../helpers/functions.helpers";
import {DATE_FORMAT} from "../../constants/global.constants";
import {LAUNCH_ROUTE} from "../../constants/routes.constants";
import Button from "@mui/material/Button";
import Link from "next/link";

export const launchesColumns: GridColDef[] = [
    {field: 'id', headerName: 'id', sortable: false, width: 70},
    {
        field: 'mission_name', headerName: 'Mission Name', width: 200,
        valueGetter: (params: GridValueGetterParams) => params.row.mission_name || '-'
    },
    {
        field: 'launch_date_utc', headerName: 'Launch Date', width: 200,
        valueGetter: (params: GridValueGetterParams) => getDateWithFormat(params.row.launch_date_utc, DATE_FORMAT.DATE_WORD)
    },
    {
        field: 'rocket_name',
        headerName: 'Rocket Name',
        valueGetter: (params: GridValueGetterParams) => params.row.rocket.rocket_name || '-',
        width: 200
    },
    {
        field: 'site_name',
        headerName: 'Site',
        valueGetter: (params: GridValueGetterParams) => params.row.launch_site.site_name || '-',
        width: 200
    },
    {
        field: 'button',
        headerName: '',
        renderCell: (params: GridValueGetterParams) => <Link href={LAUNCH_ROUTE.replace('[id]', params.row.id)}>
            <Button>
                Show Details
            </Button></Link>,
        width: 200,
        sortable: false,
        type: 'actions',
    }
];