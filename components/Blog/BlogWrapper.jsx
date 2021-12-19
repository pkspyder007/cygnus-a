import React from 'react'
import PostsList from './PostsList'
import Sidebar from './Sidebar'

function BlogWrapper({ posts }) {
    return (
        <main className='grid grid-cols-7'>
            <PostsList posts={posts} title="Recently Published" />
            <Sidebar />
        </main>
    )
}

export default BlogWrapper
