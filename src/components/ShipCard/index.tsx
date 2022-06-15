import * as React from 'react';
import {useRouter} from "next/router";

import {Card as MuiCard} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {ShipsInterface} from "../../interfaces/home.interface";

 const ShipCard = ({image, name, url, year_built, model}: ShipsInterface) => {
    const router = useRouter();
    return (
        <MuiCard sx={{maxWidth: 345}}>
            {image && <CardMedia
                component="img"
                height="140"
                image={image}
                alt="green iguana"
            />}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {model} - {year_built}
                </Typography>
            </CardContent>
            {url && <CardActions>
                <Button variant="outlined" size="small" onClick={() => router.push(url)}>Learn More</Button>
            </CardActions>
            }
        </MuiCard>
    );
}

export default ShipCard;