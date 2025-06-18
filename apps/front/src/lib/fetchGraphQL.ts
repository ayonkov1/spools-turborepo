import { BACKEND_URL } from './constants'

export const fetchGraphQL = async (query: string, variables = {}) => {
    const response = await fetch(`${BACKEND_URL}/graphql`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    })

    if (!response.ok) {
        console.error(response)

        throw new Error(`GraphQL request failed with status ${response.status}`)
    }

    const result = await response.json()

    if (result.errors) {
        return result
    }

    return result.data
}
