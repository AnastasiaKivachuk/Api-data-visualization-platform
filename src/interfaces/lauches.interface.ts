export interface LaunchInterface {
    id: string
    launch_date_utc: string
    rocket: {
        rocket_name: string
    }
    launch_site: {
        site_name: string
    }
    mission_name: string
}

export interface LaunchesInterface {
    launches?: LaunchInterface[]
}