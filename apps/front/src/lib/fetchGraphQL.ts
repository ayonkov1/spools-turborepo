import { BACKEND_URL } from './constants'

export const fetchGraphQL = async (query: string, variables = {}) => {
    const response = await fetch(`${BACKEND_URL}/graphql`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization':
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjExLCJpYXQiOjE3NTAwODExMTcsImV4cCI6MTc1MDA4NDcxN30.WUzMeVgdyol8HY7c8QyeQti_z6vvnR9_TMdolx9ggvM',
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    })

    if (!response.ok) {
        throw new Error(`GraphQL request failed with status ${response.status}`)
    }

    const result = await response.json()

    if (result.errors) {
        throw new Error(`GraphQL errors: ${result.errors.map((error: { message: string }) => error.message).join(', ')}`)
    }

    return result.data
}
