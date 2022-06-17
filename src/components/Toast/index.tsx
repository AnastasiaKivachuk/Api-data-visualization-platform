import * as React from 'react';
import Alert from '@mui/material/Alert';
import {AlertColor} from "@mui/material/Alert/Alert";

export type ToastProps = {
    type?: AlertColor
    text?: string
}

const Toast = ({type, text}: ToastProps) => {
    console.log('test TOAST')
    return (
        <Alert variant="filled" severity={type}>
            {text}
        </Alert>
    );
}

Toast.defaultProps = {
    type: 'success',
    text: 'Success!'
}

export default Toast;