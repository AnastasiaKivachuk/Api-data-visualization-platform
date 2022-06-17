import React from "react"

import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';

import StyledCarousel from "../../components/StyledCarousel";
import {LaunchWithDetailsFullInterface} from "../../interfaces/lauch.interface";
import {getDateWithFormat} from "../../helpers/functions.helpers";
import UsefulLinks from "../../components/UsefulLinks";
import Grid from "@mui/material/Grid";

const ImgIcon = styled.img`
      margin: 0 auto;
    `

const StyledCheckIcon = styled(CheckIcon)`
      color: green;
    `

const StyledCancelIcon = styled(CancelIcon)`
      color: red;
    `

const Launch = ({launch}: LaunchWithDetailsFullInterface) => {
    return (
        <>
            <Grid container alignItems={'center'} justifyContent={'center'} gap='15px'>
                <Typography variant="h2" textAlign='center'>{launch.mission_name}</Typography>
                {launch.launch_success ?
                    <StyledCheckIcon/> : <StyledCancelIcon/>}
            </Grid>
            <Typography variant='h6' textAlign='center'>Date of
                launch: {getDateWithFormat(launch.launch_date_utc)}</Typography>
            <ImgIcon src={launch.links.mission_patch_small} alt={'logo'}/>
            <Typography variant='subtitle1' textAlign='center'>{launch.details}</Typography>
            <Typography variant='h3' textAlign='center'>Rocket: {launch.rocket.rocket_name}</Typography>

            <StyledCarousel imagesUrls={launch.links.flickr_images} alt={launch.rocket.rocket_name}/>
            <UsefulLinks launchLinks={launch.links}/>

        </>
    )
}

Launch.defaultProps = {
    launch: null
}

export default Launch
