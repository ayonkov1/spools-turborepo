import { Post } from '@/lib/types/modelTypes'

type Props = {
    posts: Post[]
}

const Posts = (props: Props) => {
    return (
        <section>
            <h2 className="text-2xl font-bold leading-tight text-center mb-5">Latest posts</h2>
            <div className="h-1 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 w-96 mb-9 rounded-md text-gray-600"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {props.posts.map((post) => (
                    <div
                        key={post.id}
                        className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
                    >
                        <h3 className="text-xl font-semibold">{post.title}</h3>
                        <p className="text-gray-600 mt-2">{post.content.slice(0, 100)}...</p>
                        <div className="mt-4">
                            <span className="text-sm text-gray-500">By {post.author.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Posts
