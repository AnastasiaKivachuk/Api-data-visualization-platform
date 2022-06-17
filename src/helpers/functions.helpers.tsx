import moment from 'moment';

import {DATE_FORMAT} from "../constants/global.constants";
import Toast, {ToastProps} from "../components/Toast";

export const getDateWithFormat = (data: Date | string, format = DATE_FORMAT.DATE_TIME_NUMBER): string | null => (
    data ? moment(data)
        .format(format) : null);

export const showToast = (props: ToastProps): JSX.Element => <Toast {...props}/>