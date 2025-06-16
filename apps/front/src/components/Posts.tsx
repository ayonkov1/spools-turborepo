import { Post } from '@/lib/types/modelTypes'
import PostCard from './postCard'

type Props = {
    posts: Post[]
}

const Posts = ({ posts }: Props) => {
    return (
        <section className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold leading-tight text-center mb-5">Latest posts</h2>
            <div className="h-1 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 w-96 mb-9 rounded-md text-gray-600"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {posts.map((post) => (
                    <PostCard
                        key={post.id}
                        {...post}
                    />
                ))}
            </div>
        </section>
    )
}

export default Posts
