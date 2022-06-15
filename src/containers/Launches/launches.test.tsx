import {shallow} from "enzyme";
import React from "react";

import Launches from "./index";
import {LaunchesInterface} from "../../interfaces/lauches.interface";
import {launchesColumns} from "./launches.config";

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

    it("check usersColumns config", () => {
        expect(launchesColumns).toMatchSnapshot();
    })
})
