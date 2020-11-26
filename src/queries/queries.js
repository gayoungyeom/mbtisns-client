import { gql } from '@apollo/client';

export const GET_USER = gql`
    query getUser($id: Int!) {
        getUser(id: $id) {
            ok
            user {
                id
                firstName
                lastName
                email
                password
                phoneNumber
                mbtiType
                isVerified
                nickName
                gender
            }
            error
        }
    }
`;

export const SIGN_IN = gql`
    mutation signin($email: String!, $password: String!){
        signin(email: $email, password: $password){
            ok
            token
            error
            user {
                id
                firstName
                lastName
                email
                password
                phoneNumber
                mbtiType
                isVerified
                nickName
                gender
            }
        }
    }
`;