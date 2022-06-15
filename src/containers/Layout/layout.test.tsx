import {shallow} from "enzyme";
import React from "react";

import Layout from "./index";

const component = shallow(<Layout ><div>test Component</div></Layout>);

describe("Layout component", () => {

    it("should render Layout component", () => {
        expect(component).toMatchSnapshot();
    })
})
