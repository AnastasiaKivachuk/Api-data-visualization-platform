import {shallow} from "enzyme";
import React from "react";

import {RocketsInterface} from "../../interfaces/home.interface";
import RocketCard from "./index";
import {HOME_ROUTE} from "../../constants/routes.constants";

const MockRocketData: RocketsInterface = {
    description: "The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.",
    name: "Falcon 1",
    wikipedia: "https://en.wikipedia.org/wiki/Falcon_1"
};

const setUp = (props: RocketsInterface) => shallow(<RocketCard {...props} />);


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

describe("RocketCard component", () => {

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

    it("should render RocketCard component", () => {
        const component = setUp(MockRocketData)
        expect(component).toMatchSnapshot();
    })

    it("check all elements with props", () => {
        const component = setUp(MockRocketData)
        const text = ['Falcon 1', "The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth."]
        expect(component.find('ForwardRef(Typography)').length).toBe(2);
        component.find('ForwardRef(Typography)').map((item, index) => {
            expect(item.text()).toBe(text[index]);
        })
    })

    it("check button link", () => {
        const component = setUp(MockRocketData)
        expect(component.find('ForwardRef(Button)').length).toBe(1);
        component.find('ForwardRef(Button)').simulate('click')
    })
})
