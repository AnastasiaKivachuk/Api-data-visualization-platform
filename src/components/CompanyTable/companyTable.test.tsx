import {shallow} from "enzyme";
import Link from "next/link";
import React from "react";

import CompanyTable from "./index";

const link = 'https://twitter.com/elonmusk';

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
]

const component = shallow(<CompanyTable config={MockConfig}/>);

describe("CompanyTable component", () => {

    it("should render CompanyTable component", () => {
        expect(component).toMatchSnapshot();
    })

    it("check all elements", () => {
        expect(component.find('ForwardRef(TableRow)').length).toBe(2)
        expect(component.find('ForwardRef(TableCell)').length).toBe(4)
    })

    it("check all links", () => {
        expect(component.find('a').length).toBe(1)
        expect(component.find('ForwardRef').prop('href')).toBe(link)
    })
})
