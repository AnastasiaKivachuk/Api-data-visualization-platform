import {shallow} from "enzyme";
import React from "react";

import Rockets from "./index";
import {RocketsInterface} from "../../../interfaces/home.interface";

const MockRocketsData: RocketsInterface[] = [{
    description: "The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.",
    id: "falcon1",
    name: "Falcon 1",
    wikipedia: "https://en.wikipedia.org/wiki/Falcon_1"
}];

const setUp = (props: {rockets: RocketsInterface[]} | null) => shallow(<Rockets {...props} />);

describe("Rockets component", () => {

    it("should render Rockets component", () => {
        const component = setUp({rockets: MockRocketsData})
        expect(component).toMatchSnapshot();
    })

    it("check all elements with props", () => {
        const component = setUp({rockets: MockRocketsData})
        expect(component.find('ForwardRef(Typography)').text()).toEqual('Rockets');
        expect(component.find('RocketCard').length).toBe(1)
    })

    it("check all elements with defaultProps", () => {
        const component = setUp(null)
        expect(component.find('RocketCard').length).toBe(0)
    })
})
