import Link from 'next/link';
import React from 'react'

function PostPreview({ post }) {
    if (!post) return null;
    return (
        <div className="my-12">
            <Link href={`/posts/${post.slug}`} passHref>
                <h2 className="text-dark-gray text-2xl font-semibold cursor-pointer">{post?.title}<small className='text-sm ml-1 font-light'>, {post.readingTime}</small></h2>
            </Link>
            <p className="my-6 leading-8 font-light">
                {post?.description}
            </p>
            <Link href={`/posts/${post.slug}`} passHref>
                <a>
                    Read More
                </a>
            </Link>
        </div>
    )
}

export default PostPreview
