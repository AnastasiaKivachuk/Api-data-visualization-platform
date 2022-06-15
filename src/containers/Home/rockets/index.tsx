import React from "react";
import styled from "@emotion/styled";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import {RocketsInterface} from "../../../interfaces/home.interface";
import RocketCard from "../../../components/RocketCard";

type Props = {
    rockets: RocketsInterface[]
}
const Rockets = ({rockets}: Props) => {

    const Wrapper = styled.div`
      margin: 30px 0;
    `;

    return (
        <Wrapper>
            <Typography gutterBottom variant="h4" textAlign={'center'}>Rockets</Typography>
            <Grid container gap={'20px'} justifyContent={'center'}>{rockets.map((item) => <RocketCard
                key={item.id} {...item} />)}</Grid>
        </Wrapper>
    )
}

Rockets.defaultProps = {
    rockets: []
}

export default Rockets
