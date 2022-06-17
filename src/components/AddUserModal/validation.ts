import * as yup from 'yup';
import {FORM_FIELDS_ERRORS} from "../../constants/messages.constants";

export const FIELD_NAMES = {
    NAME: 'name',
    ROCKET: 'rocket',
    TWITTER: 'twitter'
};

export const stringRequiredYup = (min: number, max: number) => yup
    .string()
    .trim()
    .required(FORM_FIELDS_ERRORS.REQUIRED)
    .min(min, FORM_FIELDS_ERRORS.MIN_LENGTH.replace('[min]', String(min)))
    .max(max, FORM_FIELDS_ERRORS.SHOULD_BE_NO_MORE.replace('[max]', String(max)));


export const schema = yup.object().shape({
    [FIELD_NAMES.NAME]: stringRequiredYup(1, 50),
    [FIELD_NAMES.ROCKET]: stringRequiredYup(1, 50),
    [FIELD_NAMES.TWITTER]: stringRequiredYup(1, 50),
});
