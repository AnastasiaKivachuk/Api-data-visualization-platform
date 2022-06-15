import type {NextPage} from 'next'
import React from "react";

import {getHome} from "../services/api/home";
import {HomeInterface} from "../interfaces/home.interface";
import Company from "../containers/Home/company";
import Ships from "../containers/Home/ships";
import Rockets from "../containers/Home/rockets";
import Custom500Page from "./500";

export async function getStaticProps() {
    try {
        const {data} = await getHome();
        return {
            props: {
                company: data.company,
                ships: data.ships,
                rockets: data.rockets
            },
        };
    } catch (err) {
        return {props: {error: true}};
    }
}


interface Props extends HomeInterface {
    error?: boolean
}

const Home: NextPage<Props> = ({company, ships, rockets, error}) => {
    return (
        error ? <Custom500Page/> :
            <>
                {company && <Company company={company}/>}
                <Ships ships={ships}/>
                <Rockets rockets={rockets}/>
            </>
    )
}

export default Home
