'use server'

import { fetchGraphQL } from '../fetchGraphQL'
import { print } from 'graphql'
import { GET_POSTS } from '../gqlQueries'
import { Post } from '../types/modelTypes'
import { transformTakeSkip } from '../helpers'

export const fetchPosts = async ({ page, pageSize }: { page?: number; pageSize?: number }) => {
    const { take, skip } = transformTakeSkip({ page, pageSize })
    const data = await fetchGraphQL(print(GET_POSTS), {
        skip,
        take,
    })

    return { posts: data.posts as Post[], totalPosts: data.postsCount as number }
}
