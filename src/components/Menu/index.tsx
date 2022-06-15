import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

import Grid from '@mui/material/Grid'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import {IconButton} from "@mui/material";

import {APP_BAR_ITEMS} from "../../constants/menu.constants";
import {HOME_ROUTE} from "../../constants/routes.constants";

const Menu = (): JSX.Element => {

    const StyledWrapper = styled.div`
      display: flex;
      gap: 25px;
      width: fit-content;
    `

    const StyledWrapperLink = styled.div`
      align-content: center;
      cursor: pointer;
      display: flex;
    `

    return (
        <MuiAppBar>
            <Toolbar>
                <Grid container justifyContent="space-between" alignItems="center">
                    <StyledWrapperLink>
                    <Link href={HOME_ROUTE} color="inherit">
                        <a>
                    <Typography variant="h4">Space X</Typography>
                        </a>
                        </Link>
                    </StyledWrapperLink>
                    <StyledWrapper>
                        {APP_BAR_ITEMS.map(({link, text, icon}) =>
                            <Link key={link} href={link} color="inherit">
                               <a>
                                <StyledWrapperLink>
                                    <IconButton size="large">
                                        {icon}
                                    </IconButton>
                                    {text && <Typography variant="h6" lineHeight='48px'>{text}</Typography>}
                                </StyledWrapperLink>
                               </a>
                            </Link>)}
                    </StyledWrapper>
                </Grid>
            </Toolbar>
        </MuiAppBar>
    )
}

export default Menu
