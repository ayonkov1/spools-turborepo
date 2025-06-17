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
        <article className="container max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl shadow-gray-300 p-10 my-24 border border-gray-200 backdrop-blur-sm">
            <header className="mb-8">
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
                className="w-full h-auto rounded-md mb-8"
            />
            <section
                className="prose prose-lg max-w-none text-gray-800 mb-8"
                style={{ background: 'rgba(255,255,255,0.85)', padding: '1.5rem', borderRadius: '0.75rem' }}
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <footer className="border-t pt-4 mt-8 flex items-center justify-between text-sm text-gray-500">
                <span>Published by {post.author?.name}</span>
                {new Date(
                    new Date(post.createdAt).getTime() + Math.floor(Math.random() * 24 * 60 * 60 * 1000), // add up to 24h in ms
                ).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </footer>
        </article>
    )
}

export default PostPage
