import {shallow} from "enzyme";
import React from "react";

import Toast, {ToastProps} from "./index";
import {AlertColor} from "@mui/material/Alert/Alert";


const setUp = (props: ToastProps) => shallow(<Toast {...props}/>);

describe("Toast component", () => {

    it("should render Toast component with default props", () => {
        const component = setUp({});
        expect(component).toMatchSnapshot();
    })

    it("should render Toast component type error", () => {
        const component = setUp({type: 'error', text: 'It\'s error'});
        expect(component).toMatchSnapshot();
    })

    it("should render Toast component type warning", () => {
        const component = setUp({type: 'warning', text: 'It\'s warning'});
        expect(component).toMatchSnapshot();
    })

    it("should render Toast component type success", () => {
        const component = setUp({type: 'success', text: 'It\'s success'});
        expect(component).toMatchSnapshot();
    })

    it("should render Toast component type info", () => {
        const component = setUp({type: 'info', text: 'It\'s info'});
        expect(component).toMatchSnapshot();
    })
})
