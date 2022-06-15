import type { NextPage } from 'next'
import React from "react";

import Launches from "../../containers/Launches";
import {getLaunches} from "../../services/api/launches.api";
import {LaunchesInterface} from "../../interfaces/lauches.interface";
import Custom404Page from "../404";


export async function getStaticProps() {
  try {
    const {data} = await getLaunches();
    return {
      props: {
        launches: data.launches,
      },
    };
  } catch (err) {
    return {props: {}};
  }
}

interface Props extends LaunchesInterface {
  isError?: boolean
}

const LaunchesPage: NextPage<Props> = ({launches, isError}) => {
  return (
      isError ? <Custom404Page/> : <Launches launches={launches}/>
  )
}

export default LaunchesPage
