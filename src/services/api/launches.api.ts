import {gql} from '@apollo/client';
import client from '../../../apollo-client';

export const getLaunches = () => client.query({
    query: gql`
        query LaunchesScheme {
            launches {
                id
                launch_date_utc
                rocket {
                    rocket_name
                }
                launch_site {
                    site_name
                }
                mission_name
            }
        }
    `,
});
