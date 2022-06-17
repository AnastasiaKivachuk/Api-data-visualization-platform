import * as React from "react";

import {getDateWithFormat, showToast} from "./functions.helpers";
import {DATE_FORMAT} from "../constants/global.constants";
import Toast from "../components/Toast";

describe("getDateWithFormat util", () => {
    it('Positive getDateWithFormat case with default props', () => {
        const date = "2014-01-06T18:06:00.000Z";
        const result = '06.01.2014, 21:06 PM';
        expect(getDateWithFormat(date,)).toBe(result)
    })
    it('Positive getDateWithFormat case', () => {
        const date = "2014-01-06T18:06:00.000Z";
        const result = 'Jan 06, 2014';
        expect(getDateWithFormat(date, DATE_FORMAT.DATE_WORD)).toBe(result)
    })
    it('Negative getDateWithFormat case', () => {
        expect(getDateWithFormat('')).toBeNull()
    })
});

describe("showToast util", () => {
    it('showToast render toast', () => {
        expect(showToast({})).toEqual(
            <Toast text="Success!" type="success" />)
    })
});