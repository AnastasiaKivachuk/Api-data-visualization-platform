import { gql } from '@apollo/client';
import client from '../../../apollo-client';

export const getHome = () => client.query({
  query: gql`
        query HomeScheme {
            company {
                ceo
                employees
                founded
                founder
                links {
                    elon_twitter
                    website
                }
                name
                summary
            }
            ships {
                id
                image
                model
                name
                url
                year_built
            }
            rockets {
                wikipedia
                name
                id
                description
            }
        }
    `,
});
