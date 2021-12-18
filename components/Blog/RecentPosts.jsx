import React from 'react'
import H1 from '../Common/H1'
import PostPreview from './PostPreview'

function RecentPosts() {
    return (
        <div className='col-span-7 lg:col-span-5'>
            <H1 text="RECENTLY PUBLISHED" />
            <PostPreview />
            <PostPreview />
            <PostPreview />
            <PostPreview />
            <PostPreview />
            <PostPreview />
            <PostPreview />
        </div>
    )
}

export default RecentPosts
