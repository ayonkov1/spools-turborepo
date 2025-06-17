import { Post } from '@/lib/types/modelTypes'
import Image from 'next/image'
import Link from 'next/link'

type Props = Partial<Post>

const PostCard = ({ id, slug, thumbnail, title, content, author, createdAt }: Props) => {
    return (
        <div className="backdrop-blur-md p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow border border-white/20 flex flex-col mx h-full">
            <Image
                src={thumbnail || '/no-image.png'}
                alt={title || 'Post thumbnail'}
                width={600}
                height={192}
                className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            <div className="text-gray-600 text-sm mt-1 mb-2 flex-grow flex flex-col">
                <p className="text-gray-800 mt-2">{content?.slice(0, 100)}...</p>
                <div className="mt-4 text-sm text-gray-800">
                    <p>By {author?.name || 'John Doe'}</p>
                    <p>{createdAt ? new Date(createdAt).toLocaleDateString('de-DE') : ''}</p>
                </div>
                <div className="flex-grow" />
                {slug && (
                    <div className="flex justify-end mt-4">
                        <Link
                            href={`/posts/${slug}/${id}`}
                            className="text-blue-500 hover:underline"
                        >
                            Read more {id ? `(${id})` : ''}
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default PostCard
