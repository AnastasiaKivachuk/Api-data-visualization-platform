import React from "react";

import {Paper, Table, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";

import {CompanyTableConfigInterface} from "../../interfaces/home.interface";

type Props = {
    config: CompanyTableConfigInterface[]
}

const CompanyTable = ({config}: Props): JSX.Element => {
    return (
        <TableContainer sx={{width: 'fit-content', margin: '20px auto'}} component={Paper}>
            <Table sx={{width: 450}} aria-label="simple table" align={'center'}>
                <TableBody>
                    {config.map(({leftColumn, rightColumn, id}) =>
                        <TableRow key={id}
                                  sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                {leftColumn}
                            </TableCell>
                            <TableCell align="right">
                                {rightColumn}
                            </TableCell>
                        </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CompanyTable;
