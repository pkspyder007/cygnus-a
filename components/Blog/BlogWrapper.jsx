import React from 'react'
import RecentPosts from './RecentPosts'
import Sidebar from './Sidebar'

function BlogWrapper({ posts }) {
    return (
        <main className='grid grid-cols-7'>
            <RecentPosts recentPosts={posts} />
            <Sidebar />
        </main>
    )
}

export default BlogWrapper
