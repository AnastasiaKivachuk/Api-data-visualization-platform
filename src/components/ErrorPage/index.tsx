import React, {FC} from 'react';
import Link from 'next/link';

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import {HOME_ROUTE} from "../../constants/routes.constants";

interface Props {
    error?: string
    text?: string
}

const ErrorPage: FC<Props> = ({error, text}) => (
    <>
        <Typography variant="h1" textAlign='center'>
            {error}
        </Typography>
        <Typography variant="h3" textAlign='center'>
            Ooops, something went wrong
        </Typography>
        <Typography variant="subtitle1" textAlign='center'>
            {text}
        </Typography>
        <Link href={HOME_ROUTE}>
            <Button variant={'contained'}>Go to the main page</Button>
        </Link>
    </>
);

ErrorPage.defaultProps = {
    error: '404',
    text: 'The page you are looking for doesn\'t exist or an other error occurred. Go back, or head over to the main page.',
};

export default ErrorPage;
