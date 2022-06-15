import {gql} from '@apollo/client';
import client from '../../../apollo-client';

export const getUsers = () => client.query({
    query: gql`
        query HomeScheme {
            users {
                id
                name
                rocket
                timestamp
                twitter
            }
        }
    `,
});
