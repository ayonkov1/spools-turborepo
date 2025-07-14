import Hero from '@/components/hero'
import Pagination from '@/components/pagination'
import Posts from '@/components/Posts'
import { fetchPosts } from '@/lib/actions/postActions'
import { DEFAULT_PAGINATION_TAKE } from '@/lib/constants'
import { getSession } from '@/lib/session'

type Props = {
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Home({ searchParams }: Props) {
    const params = searchParams ? await searchParams : {}
    const page = params?.page
    const posts = await fetchPosts({ page: page ? +page : undefined })

    const session = await getSession()

    console.log({ session })

    return (
        <main>
            <Hero />
            <Pagination
                totalPages={Math.ceil(posts.totalPosts / DEFAULT_PAGINATION_TAKE)}
                currentPage={page ? +page : 1}
            />
            <Posts posts={posts.posts} />
        </main>
    )
}
