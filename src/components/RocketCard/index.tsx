import * as React from 'react';
import {useRouter} from "next/router";

import {Card as MuiCard} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {RocketsInterface} from "../../interfaces/home.interface";

 const RocketCard = ({description, name, wikipedia}: RocketsInterface) => {
    const router = useRouter();
    const openUrl = () => router.push(wikipedia);
    return (
        <MuiCard sx={{maxWidth: 345}}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            {wikipedia && <CardActions>
                <Button variant="outlined" size="small" onClick={openUrl}>Learn More</Button>
            </CardActions>
            }
        </MuiCard>
    );
}

export default RocketCard;