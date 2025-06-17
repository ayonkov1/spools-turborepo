import { Post } from '@/lib/types/modelTypes'
import Image from 'next/image'
import Link from 'next/link'

type Props = Partial<Post>

const PostCard = ({ id, slug, thumbnail, title, content, author, createdAt }: Props) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md border border-gray-200 flex flex-col h-full">
            <Image
                priority
                src={thumbnail || '/no-image.png'}
                alt={title || 'Post thumbnail'}
                width={600}
                height={192}
                className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <div className="text-gray-700 text-sm mt-1 mb-2 flex-grow flex flex-col">
                <p className="mt-2">{content?.slice(0, 100)}...</p>
                <div className="flex items-end justify-between mt-4 h-10">
                    <div className="text-sm text-gray-800 font-medium">By {author?.name || 'John Doe'}</div>
                    {slug && (
                        <Link
                            href={`/posts/${slug}/${id}`}
                            className="text-blue-600 hover:underline"
                        >
                            Read more
                        </Link>
                    )}
                </div>
                <div className="text-xs text-gray-500 mt-1">{createdAt ? new Date(createdAt).toLocaleDateString('de-DE') : ''}</div>
            </div>
        </div>
    )
}

export default PostCard
