import { Post } from '@/lib/types/modelTypes'
import Image from 'next/image'

type Props = Partial<Post>

const PostCard = ({ id, slug, thumbnail, title, content, author, createdAt }: Props) => {
    return (
        <div className="bg-white/30 backdrop-blur-md p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow border border-white/20 ">
            {thumbnail && (
                <Image
                    src={thumbnail}
                    alt={title || 'Post thumbnail'}
                    width={600}
                    height={192}
                    className="w-full h-48 object-cover rounded-md mb-4"
                />
            )}
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            <p className="text-gray-800 mt-2">{content?.slice(0, 100)}...</p>
            <div className="mt-4 text-sm text-gray-800">
                <p>By {author?.name || 'John Doe'}</p>
                <p>{createdAt ? new Date(createdAt).toLocaleDateString('de-DE') : ''}</p>
                {slug && (
                    <p>
                        <span className="font-medium">Slug:</span> {slug}
                    </p>
                )}
                {id && (
                    <p>
                        <span className="font-medium">ID:</span> {id}
                    </p>
                )}
            </div>
        </div>
    )
}

export default PostCard
