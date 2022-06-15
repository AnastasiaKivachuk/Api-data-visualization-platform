import type {NextPage} from 'next'
import React from "react";
import styled from "@emotion/styled";

import Grid from '@mui/material/Grid'
import {Container} from "@mui/material";

import Menu from "../../components/Menu";

type Props = {
    children: JSX.Element
}

const Layout: NextPage<Props> = ({children}) => {
    const StyledContainer = styled(Container)`
      padding-top: 60px;
      display: flex;
      flex-direction: column;
      align-items: center;
    `
    return (
        <Grid item>
            <Menu/>
            <StyledContainer>{children}</StyledContainer>
        </Grid>
    )
}

export default Layout
