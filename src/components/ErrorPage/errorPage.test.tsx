import {shallow} from "enzyme";

import ErrorPage from "./index";


const MockErrorData = {
    error: "500",
    text: "The server encountered an internal error or misconfiguration. Please, refresh this page or try again later."
}

const setUp = (props: { error: string, text: string } | {}) => shallow(<ErrorPage {...props}/>);

describe("ErrorPage component", () => {

    it("should render ErrorPage component with default Props", () => {
        const component = setUp({});
        expect(component).toMatchSnapshot();
    })

    it("should render ErrorPage component with props", () => {
        const component = setUp(MockErrorData);
        expect(component).toMatchSnapshot();
    })
})
