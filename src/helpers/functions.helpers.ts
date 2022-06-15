import moment from 'moment';

import {DATE_FORMAT} from "../constants/global.constants";

export const getDateWithFormat = (data: Date | string, format = DATE_FORMAT.DATE_TIME_NUMBER): string | null => (
    data ? moment(data)
        .format(format) : null);