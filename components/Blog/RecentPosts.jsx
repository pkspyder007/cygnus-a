import React from 'react'
import H1 from '../Common/H1'
import PostPreview from './PostPreview'

function RecentPosts({ recentPosts }) {
    return (
        <div className='col-span-7 lg:col-span-5'>
            <H1 text="RECENTLY PUBLISHED" />
            {recentPosts.map(post => (<PostPreview post={post} key={post.slug} />))}
            <PostPreview />
        </div>
    )
}

export default RecentPosts
