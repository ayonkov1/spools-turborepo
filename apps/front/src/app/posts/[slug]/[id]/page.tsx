import { fetchPostById } from '@/lib/actions/postActions'
import Image from 'next/image'

type Props = {
    params: Promise<{
        id: string
    }>
}

const PostPage = async ({ params }: Props) => {
    const { id } = await params
    const post = await fetchPostById(Number(id))

    return (
        <article className="container max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 my-24">
            <header className="mb-6">
                <h1 className="text-4xl font-bold mb-2 text-gray-900">{post.title}</h1>
                <div className="flex items-center space-x-4 mb-2">
                    <Image
                        src={post.author.avatar ?? '/avatar-placeholder.png'}
                        alt={post.author?.name ?? 'Author'}
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <span className="text-gray-700 font-medium">{post.author?.name}</span>
                    <span className="text-gray-400 text-sm">• {new Date(post.createdAt).toLocaleDateString()}</span>
                </div>
            </header>
            <Image
                src={post.thumbnail ?? '/placeholder.png'}
                alt={post.title}
                width={900}
                height={450}
                className="w-full h-auto rounded-md mb-6"
            />
            <section
                className="prose prose-lg max-w-none text-gray-800 mb-8"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <footer className="border-t pt-4 mt-8 flex items-center justify-between text-sm text-gray-500">
                <span>Published by {post.author?.name}</span>
                <span>{new Date(post.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            </footer>
        </article>
    )
}

export default PostPage
