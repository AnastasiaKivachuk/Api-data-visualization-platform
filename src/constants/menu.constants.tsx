import {HOME_ROUTE, LAUNCHES_ROUTE, USERS_ROUTE} from './routes.constants';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import React from "react";

export const APP_BAR_ITEMS = [
    {
        link: HOME_ROUTE,
        text: '',
        icon: <HomeIcon/>
    },
    {
        link: USERS_ROUTE,
        text: 'Users',
        icon: <GroupIcon/>
    },
    {
        text: 'Launches',
        link: LAUNCHES_ROUTE,
        icon: <RocketLaunchIcon/>
    }
]