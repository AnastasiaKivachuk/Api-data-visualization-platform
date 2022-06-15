import {shallow} from "enzyme";
import React from "react";

import Layout from "./index";
import Users from "./index";
import {UsersInterface} from "../../interfaces/users.interface";
import {usersColumns} from "./users.config";

const MockUsersTable = [{
    id: "577073b9-1aac-4952-a673-9d4cf1895c51",
    name: "defaultQ1213456789",
    rocket: null,
    timestamp: "2022-06-14T00:34:47.625834+00:00",
    twitter: null,
}]

const setUp = (props: UsersInterface | {}) => shallow(<Users {...props}/>);

describe("Users component", () => {

    it("should render Users component with default props", () => {
        const component = setUp({});
        expect(component).toMatchSnapshot();
    })

    it("should render Users component with props", () => {
        const component = setUp({users: MockUsersTable});
        expect(component).toMatchSnapshot();
    })

    it("hide table and show info if no props", () => {
        const component = setUp({});
        const text = ['Users', 'No Data'];
        expect(component.find('Memo(ForwardRef(DataGrid))').length).toBe(0)
        expect(component.find('ForwardRef(Typography)').length).toBe(2)
        component.find('ForwardRef(Typography)').map((item, index) => {
            expect(item.text()).toBe(text[index]);
        })
    })

    it("hide info and show table if props", () => {
        const component = setUp({users: MockUsersTable});
        expect(component.find('Memo(ForwardRef(DataGrid))').length).toBe(1)
        expect(component.find('ForwardRef(Typography)').length).toBe(1)
        expect(component.find('ForwardRef(Typography)').text()).toBe('Users')
    })

    it("check usersColumns config", () => {
        expect(usersColumns).toMatchSnapshot();
    })
})
