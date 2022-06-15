import type {NextPage} from 'next'
import React from "react";

import {getLaunch} from "../../services/api/launch.api";
import {LaunchWithDetailsInterface} from "../../interfaces/lauch.interface";
import Launch from "../../containers/Launch";
import Custom404Page from "../404";


export async function getServerSideProps(context: { query: { id: string; }; }) {
    try {
        const {data} = await getLaunch(String(context.query.id));
        return {
            props: {
                launch: data.launch,
            },
        };
    } catch (err) {
        return {props: {isError: true}};
    }
}

type Props = {
    launch?: LaunchWithDetailsInterface
    isError?: boolean
}

const LaunchPage: NextPage<Props> = ({launch, isError}) => {
    return (
        isError ? <Custom404Page/> : <Launch launch={launch}/>
    )
}

export default LaunchPage
