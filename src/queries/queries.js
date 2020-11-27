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

export const SIGN_UP = gql`
    mutation signup($firstName: String!, $lastName: String!, $email: String!, $password: String!, 
    $phoneNumber: String!, $mbtiType: String!, $isVerified: Boolean!, $nickName: String, $gender: Boolean){
        signup(
            firstName: $firstName, 
            lastName: $lastName,
            email: $email,
            password: $password,
            phoneNumber: $phoneNumber,
            mbtiType: $mbtiType,
            isVerified: $isVerified,
            nickName: $nickName,
            gender: $gender
        ){
            ok
            token
            error
        }
    }
`;
