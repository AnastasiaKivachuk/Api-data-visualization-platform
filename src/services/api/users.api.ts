import {gql} from '@apollo/client';
import client from '../../../apollo-client';
import {UserMutateObjectInterface} from "../../interfaces/users.interface";

export const getUsers = () => client.query({
    query: gql`
        query UsersScheme {
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


export const mutateUser = (objects: UserMutateObjectInterface) => client.mutate({
    mutation: gql`
        mutation UserScheme($objects: [users_insert_input!]!) {
            insert_users(objects: $objects) {
                returning {
                    id
                    name
                    rocket
                    timestamp
                    twitter
                }
            }}
    `,
    variables: {objects},
});

export const deleteUserMutation = (id: string) => client.mutate({
    mutation: gql`
        mutation Delete_users($where: users_bool_exp!) {
            delete_users(where: $where) {
                returning {
                    id
                }
            }
        }
    `,
    variables: {
        "where": {
            "id": {
                "_in": id
            }
        }
    },
});
