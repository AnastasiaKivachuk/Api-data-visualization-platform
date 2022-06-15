import {gql} from '@apollo/client';
import client from '../../../apollo-client';

export const getLaunch = (launchId: string) => client.query({
    query: gql`
        query LaunchesScheme($launchId: ID!) {
            launch(id: $launchId) {
                id
                launch_date_utc
                rocket {
                    rocket_name
                }
                mission_name
                details
                launch_success
                links {
                    article_link
                    flickr_images
                    mission_patch_small
                    video_link
                    wikipedia
                }
            }
        }
    `,
    variables: {
        launchId
    },
});
