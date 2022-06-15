export interface LaunchLinksInterface {
    article_link: string
    flickr_images: string[]
    mission_patch_small: string
    video_link: string
    wikipedia: string
}

export interface LaunchWithDetailsInterface {
    id: string
    launch_date_utc: string
    rocket: {
        rocket_name: string
    }
    mission_name: string
    details: string
    launch_success: boolean
    links: LaunchLinksInterface
}

export interface LaunchWithDetailsFullInterface{
    launch: LaunchWithDetailsInterface
}