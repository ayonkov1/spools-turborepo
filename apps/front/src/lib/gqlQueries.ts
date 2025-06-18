import gql from 'graphql-tag'

export const GET_POSTS = gql`
    query posts($skip: Float, $take: Float) {
        posts(skip: $skip, take: $take) {
            id
            title
            thumbnail
            content
            createdAt
            slug
            author {
                id
                name
                avatar
            }
        }
        postsCount
    }
`

export const GET_POST_BY_ID = gql`
    query getPostById($id: Int!) {
        getPostById(id: $id) {
            id
            title
            thumbnail
            content
            createdAt
            slug
            author {
                id
                name
                avatar
            }
        }
    }
`

export const CREATE_USER_MUTATION = gql`
    mutation createUser($createUserInput: CreateUserInput!) {
        createUser(createUserInput: $createUserInput) {
            id
            name
            email
        }
    }
`
