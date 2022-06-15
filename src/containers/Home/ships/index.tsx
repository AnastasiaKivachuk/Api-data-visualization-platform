import React from "react";
import styled from "@emotion/styled";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import {ShipsInterface} from "../../../interfaces/home.interface";
import ShipCard from "../../../components/ShipCard";

type Props = {
    ships: ShipsInterface[]
}

const Ships = ({ships}: Props) => {

    const Wrapper = styled.div`
      margin: 30px 0;
    `;

    return (
        <Wrapper>
            <Typography gutterBottom variant="h4" textAlign={'center'}>Ships</Typography>
            <Grid container gap={'20px'} justifyContent={'center'}>{
                ships.map((item) => <ShipCard key={item.id} {...item} />)
            }</Grid>
        </Wrapper>
    )
}

Ships.defaultProps = {
    ships: []
}

export default Ships
