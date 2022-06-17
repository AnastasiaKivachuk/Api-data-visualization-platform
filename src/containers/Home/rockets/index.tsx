import React from "react";
import styled from "@emotion/styled";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import {RocketsInterface} from "../../../interfaces/home.interface";
import RocketCard from "../../../components/RocketCard";

type Props = {
    rockets: RocketsInterface[]
}

const Wrapper = styled.div`
  margin: 30px 0;
`;

const Rockets = ({rockets}: Props) => {
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
