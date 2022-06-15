import {shallow} from "enzyme";
import React from "react";

import {ShipsInterface} from "../../../interfaces/home.interface";
import Ships from "./index";

const MockShipsData: ShipsInterface[] = [{
    id: 'NRCQUEST',
    image: 'https://i.imgur.com/GvtuYUN.jpg',
    model: 'Marmac 303',
    name: 'NRC Quest',
    url: 'https://www.marinetraffic.com/en/ais/details/ships/shipid:447294/vessel:NRC%20QUEST',
    year_built: 2002
}];

const setUp = (props: { ships: ShipsInterface[] } | null) => shallow(<Ships {...props} />);

describe("Ships component", () => {

    it("should render Ships component", () => {
        const component = setUp({ships: MockShipsData})
        expect(component).toMatchSnapshot();
    })

    it("check all elements with props", () => {
        const component = setUp({ships: MockShipsData})
        expect(component.find('ForwardRef(Typography)').text()).toEqual('Ships');
        expect(component.find('ShipCard').length).toBe(1)
    })

    it("check all elements with defaultProps", () => {
        const component = setUp(null)
        expect(component.find('ShipCard').length).toBe(0)
    })
})
