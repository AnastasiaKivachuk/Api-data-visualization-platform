import {shallow} from "enzyme";
import React from "react";

import {ShipsInterface} from "../../interfaces/home.interface";
import {HOME_ROUTE} from "../../constants/routes.constants";
import ShipCard from "./index";

const MockShipData: ShipsInterface = {
    image: 'https://i.imgur.com/GvtuYUN.jpg',
    model: 'Marmac 303',
    name: 'NRC Quest',
    url: 'https://www.marinetraffic.com/en/ais/details/ships/shipid:447294/vessel:NRC%20QUEST',
    year_built: 2002
};

const setUp = (props: ShipsInterface) => shallow(<ShipCard {...props} />);


jest.mock('next/router', () => ({
    useRouter() {
        return ({
            route: '/',
            pathname: '',
            query: '',
            asPath: '',
            push: jest.fn(),
            events: {
                on: jest.fn(),
                off: jest.fn()
            },
            beforePopState: jest.fn(() => null),
            prefetch: jest.fn(() => null)
        });
    },
}));

describe("ShipCard component", () => {

    beforeEach(() => {
        const useRouter = jest.spyOn(require("next/router"), "useRouter");
        useRouter.mockImplementation(() => ({
            route: HOME_ROUTE,
            pathname: '',
            query: '',
            asPath: '',
            push: jest.fn(),
            events: {
                on: jest.fn(),
                off: jest.fn()
            },
            beforePopState: jest.fn(() => null),
            prefetch: jest.fn(() => null)
        }));
    })

    it("should render ShipCard component", () => {
        const component = setUp(MockShipData)
        expect(component).toMatchSnapshot();
    })

    it("check all elements with props", () => {
        const component = setUp(MockShipData)
        const text = ['NRC Quest', "Marmac 303 - 2002"]
        expect(component.find('ForwardRef(Typography)').length).toBe(2);
        component.find('ForwardRef(Typography)').map((item, index) => {
            expect(item.text()).toBe(text[index]);
        })
    })

    it("check button link", () => {
        const component = setUp(MockShipData)
        expect(component.find('ForwardRef(Button)').length).toBe(1);
        component.find('ForwardRef(Button)').simulate('click')
    })
})
