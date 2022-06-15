import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ArticleIcon from "@mui/icons-material/Article";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SchoolIcon from "@mui/icons-material/School";

import {LaunchLinksInterface} from "../../interfaces/lauch.interface";

type Props = {
    launchLinks: LaunchLinksInterface,

}

const icons = {article_link: <ArticleIcon/>, video_link: <YouTubeIcon/>, wikipedia: <SchoolIcon/>}

const UsefulLinks = ({launchLinks}: Props): JSX.Element => {

    const Wrap = styled.div`
      margin: 20px auto;
    `

    // @ts-ignore
    const getLinks = (launchLinks) = Object.keys(launchLinks).map(item => ({icon: icons[item], url: launchLinks[item]})).filter(item => item?.icon);

    return (
        <Wrap>
            <Typography variant='h3' textAlign='center'>Usefully Links:</Typography>
            <Grid gap='20px' container justifyContent={'center'}>
                {getLinks.map(item => item.url &&
                    <Link target={'_blank'} key={item.url} href={item.url}><a>{item.icon}</a></Link>)}
            </Grid>
        </Wrap>
    )
}

export default UsefulLinks
