import React from 'react'
import Lottie from 'react-lottie'
import H1 from '../Common/H1'
import PostPreview from './PostPreview'
import animationData from '@assets/surprised-face.json'
import Link from 'next/link'

function PostsList({ posts, title }) {
    return (
        <div className='col-span-7 lg:col-span-5'>
            <H1 text={title} />
            {posts.map(post => (<PostPreview post={post} key={post.slug} />))}
            {posts.length === 0 && (
                <div className="w-full md:w-1/3 mx-auto text-center">
                    <Lottie options={{
                        loop: true,
                        autoplay: true,
                        animationData: animationData,
                    }} />
                    <h2 className="text-xl">
                        Oops ! No posts found for this keyword.
                    </h2>
                    <Link href={'/blog'} passHref>
                        <button className="bg-light-green p-2 rounded-md text-white mt-4">Go to blog</button>
                    </Link>
                </div>
            )}
            <PostPreview />
        </div>
    )
}

export default PostsList
