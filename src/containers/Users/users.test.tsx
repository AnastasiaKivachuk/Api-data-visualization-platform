import {shallow} from "enzyme";
import React from "react";

import Users from "./index";
import {UsersInterface} from "../../interfaces/users.interface";
import {usersColumns} from "./users.config";
import {getDateWithFormat} from "../../helpers/functions.helpers";
import Button from "@mui/material/Button";
import DeleteForeverSharpIcon from "@mui/icons-material/DeleteForeverSharp";

const MockUsersTable = [{
    id: "577073b9-1aac-4952-a673-9d4cf1895c51",
    name: "defaultQ1213456789",
    rocket: '123',
    timestamp: "2022-06-14T00:34:47.625834+00:00",
    twitter: '12345',
}]

const EmptyMockUser = [{
    id: "577073b9-1aac-4952-a673-9d4cf1895c51",
    name: "",
    rocket: null,
    timestamp: "",
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
})

const mockFunc = jest.fn()

describe("check usersColumns config", () => {
    it("check name usersColumns config", () => {
        const name = usersColumns(mockFunc, mockFunc)[1];
        if (name?.valueGetter) {
            // @ts-ignore
            expect(name.valueGetter({row: MockUsersTable[0]})).toBe(MockUsersTable[0][name.field])
        }
    })

    it("check name usersColumns config with null", () => {
        const name = usersColumns(mockFunc, mockFunc)[1];
        if (name?.valueGetter) {
            // @ts-ignore
            expect(name.valueGetter({row: EmptyMockUser})).toBe('-')
        }
    })

    it("check rocket usersColumns config", () => {
        const rocket = usersColumns(mockFunc, mockFunc)[2];
        if (rocket?.valueGetter) {
            // @ts-ignore
            expect(rocket.valueGetter({row: MockUsersTable[0]})).toBe(MockUsersTable[0][rocket.field])
        }
    })

    it("check rocket usersColumns config with null", () => {
        const rocket = usersColumns(mockFunc, mockFunc)[2];
        if (rocket?.valueGetter) {
            // @ts-ignore
            expect(rocket.valueGetter({row: EmptyMockUser})).toBe('-')
        }
    })

    it("check twitter usersColumns config", () => {
        const twitter = usersColumns(mockFunc, mockFunc)[3];
        if (twitter?.valueGetter) {
            // @ts-ignore
            expect(twitter.valueGetter({row: MockUsersTable[0]})).toBe(MockUsersTable[0][twitter.field])
        }
    })

    it("check twitter usersColumns config with null", () => {
        const twitter = usersColumns(mockFunc, mockFunc)[3];
        if (twitter?.valueGetter) {
            // @ts-ignore
            expect(twitter.valueGetter({row: EmptyMockUser})).toBe('-')
        }
    })

    it("check timestamp usersColumns config", () => {
        const timestamp = usersColumns(mockFunc, mockFunc)[4];
        if (timestamp?.valueGetter) {
            // @ts-ignore
            expect(timestamp.valueGetter({row: MockUsersTable[0]})).toBe(getDateWithFormat(MockUsersTable[0][timestamp.field]))
        }
    })

    // it("check button usersColumns config", () => {
    //     const button = usersColumns(mockFunc, mockFunc)[5];
    //     // console.log(button.renderCell({row: MockUsersTable[0]}))
    //     if (button?.renderCell) {
    //         // @ts-ignore
    //         expect(button.renderCell({row: MockUsersTable[0]})).toEqual(
    //             <Button onClick={() => {
    //                 mockFunc();
    //                 mockFunc({id: '577073b9-1aac-4952-a673-9d4cf1895c51', name: 'defaultQ1213456789'});
    //             }}>
    //                 <DeleteForeverSharpIcon/>
    //             </Button>,
    //         )
    //     }
    // })


    expect(usersColumns).toMatchSnapshot();
})