import type {NextPage} from 'next'
import React from "react";

import Users from "../../containers/Users";
import {UsersInterface} from "../../interfaces/users.interface";
import {getUsers} from "../../services/api/users.api";
import Custom404Page from "../404";


export async function getStaticProps() {
    try {
        const {data} = await getUsers();
        return {
            props: {
                users: data.users,
            },
        };
    } catch (err) {
        return {props: {isError: true}};
    }
}

interface Props extends UsersInterface {
    isError?: boolean
}

const UsersPage: NextPage<Props> = ({users, isError}) => {
    return (
        isError ? <Custom404Page/> : <Users users={users}/>
    )
}

export default UsersPage
