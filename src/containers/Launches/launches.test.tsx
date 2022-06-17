import {shallow} from "enzyme";
import React from "react";

import Launches from "./index";
import {LaunchesInterface} from "../../interfaces/lauches.interface";
import {launchesColumns} from "./launches.config";
import {getDateWithFormat} from "../../helpers/functions.helpers";
import {LAUNCH_ROUTE} from "../../constants/routes.constants";
import Button from "@mui/material/Button";
import Link from "next/link";
import {DATE_FORMAT} from "../../constants/global.constants";

const MockLaunchesTable = [{
    id: "13",
    launch_date_utc: "2014-01-06T18:06:00.000Z",
    launch_site: {
        site_name: "CCAFS SLC 40"
    },
    mission_name: "Thaicom 6",
    rocket:
        {rocket_name: "Falcon 9"}
}]

const EmptyMockLaunchesTable = {
    id: "13",
    launch_date_utc: "2014-01-06T18:06:00.000Z",
    launch_site: {
        site_name: null
    },
    mission_name: null,
    rocket:
        {rocket_name: null}
}

const setUp = (props: LaunchesInterface | {}) => shallow(<Launches {...props}/>);

describe("Launches component", () => {

    it("should render Launches component with default props", () => {
        const component = setUp({});
        expect(component).toMatchSnapshot();
    })

    it("should render Launches component with props", () => {
        const component = setUp({launches: MockLaunchesTable});
        expect(component).toMatchSnapshot();
    })

    it("hide table and show info if no props", () => {
        const component = setUp({});
        const text = ['Launches', 'No Data'];
        expect(component.find('Memo(ForwardRef(DataGrid))').length).toBe(0)
        expect(component.find('ForwardRef(Typography)').length).toBe(2)
        component.find('ForwardRef(Typography)').map((item, index) => {
            expect(item.text()).toBe(text[index]);
        })
    })

    it("hide info and show table if props", () => {
        const component = setUp({launches: MockLaunchesTable});
        expect(component.find('Memo(ForwardRef(DataGrid))').length).toBe(1)
        expect(component.find('ForwardRef(Typography)').length).toBe(1)
        expect(component.find('ForwardRef(Typography)').text()).toBe('Launches')
    })

})

describe("check usersColumns config", () => {
    it("check mission_name usersColumns config", () => {
        const mission_name = launchesColumns[1];
        if (mission_name?.valueGetter) {
            // @ts-ignore
            expect(mission_name.valueGetter({row: MockLaunchesTable[0]})).toBe(MockLaunchesTable[0][mission_name.field])
        }
    })

    it("check mission_name usersColumns config with null", () => {
        const mission_name = launchesColumns[1];
        if (mission_name?.valueGetter) {
            // @ts-ignore
            expect(mission_name.valueGetter({row: EmptyMockLaunchesTable})).toBe('-')
        }
    })

    it("check launch_date_utc usersColumns config", () => {
        const launch_date_utc = launchesColumns[2];
        if (launch_date_utc?.valueGetter) {
            // @ts-ignore
            expect(launch_date_utc.valueGetter({row: MockLaunchesTable[0]})).toBe(getDateWithFormat(MockLaunchesTable[0][launch_date_utc.field], DATE_FORMAT.DATE_WORD))
        }
    })

    it("check rocket_name usersColumns config", () => {
        const rocket_name = launchesColumns[3];
        if (rocket_name?.valueGetter) {
            // @ts-ignore
            expect(rocket_name.valueGetter({row: MockLaunchesTable[0]})).toBe(MockLaunchesTable[0].rocket.rocket_name)
        }
    })

    it("check rocket_name usersColumns config with null", () => {
        const rocket_name = launchesColumns[3];
        if (rocket_name?.valueGetter) {
            // @ts-ignore
            expect(rocket_name.valueGetter({row: EmptyMockLaunchesTable})).toBe('-')
        }
    })

    it("check site_name usersColumns config", () => {
        const site_name = launchesColumns[4];
        if (site_name?.valueGetter) {
            // @ts-ignore
            expect(site_name.valueGetter({row: MockLaunchesTable[0]})).toBe(MockLaunchesTable[0].launch_site.site_name)
        }
    })

    it("check site_name usersColumns config with null", () => {
        const site_name = launchesColumns[4];
        if (site_name?.valueGetter) {
            // @ts-ignore
            expect(site_name.valueGetter({row: EmptyMockLaunchesTable})).toBe('-')
        }
    })

    it("check button usersColumns config", () => {
        const button = launchesColumns[5];
        if (button?.renderCell) {
            // @ts-ignore
            expect(button.renderCell({row: MockLaunchesTable[0]})).toEqual(<Link
                href={LAUNCH_ROUTE.replace('[id]', MockLaunchesTable[0].id)}>
                <Button>
                    Show Details
                </Button></Link>)
        }
    })
    expect(launchesColumns).toMatchSnapshot();
})