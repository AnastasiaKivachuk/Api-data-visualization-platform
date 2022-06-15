import {shallow} from "enzyme";
import Link from "next/link";
import React from "react";

import Company from "./index";
import {CompanyTableConfig} from "./companyTableConfig";

const link = 'https://www.spacex.com/';

const MockConfig = [{
    id: 1,
    leftColumn: 'CEO',
    rightColumn: <Link href={'https://twitter.com/elonmusk'} target={'_blank'}>
        <a>
            Elon Musk
        </a>
    </Link>
},
    {
        id: 2,
        leftColumn: 'Employees',
        rightColumn: 7000
    },
    {
        id: 3,
        leftColumn: 'Founded',
        rightColumn: 2002
    }, {
        id: 4,
        leftColumn: 'Founder',
        rightColumn: <Link href={'https://twitter.com/elonmusk'} target={'_blank'}>
            <a>
                Elon Musk
            </a>
        </Link>
    }
];

const MockCompanyData = {
    ceo: "Elon Musk",
    employees: 7000,
    founded: 2002,
    founder: "Elon Musk",
    links: {
        elon_twitter: "https://twitter.com/elonmusk",
        website: "https://www.spacex.com/"
    },
    name: "SpaceX",
    summary: "SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets."
}

const component = shallow(<Company company={MockCompanyData}/>);

describe("Company component", () => {

    it("should render Company component", () => {
        expect(component).toMatchSnapshot();
    })

    it("check all elements", () => {
        const text = ['SpaceX', "SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets."]
        expect(component.find('ForwardRef(Typography)').length).toEqual(2)
        component.find('ForwardRef(Typography)').map((item, index) =>
            expect(item.text()).toEqual(text[index]))

    })

    it("check all links", () => {
        expect(component.find('a').length).toBe(1)
        component.find('ForwardRef').map((item) =>
        expect(item.prop('href')).toBe(link))
    })

    it("check CompanyTableConfig", () => {
        expect(CompanyTableConfig(MockCompanyData)).toEqual(MockConfig)
    })
})
