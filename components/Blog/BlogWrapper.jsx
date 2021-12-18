import React from 'react'
import RecentPosts from './RecentPosts'
import Sidebar from './Sidebar'

function BlogWrapper() {
    return (
        <main className='grid grid-cols-7'>
            <RecentPosts />
            <Sidebar />
        </main>
    )
}

export default BlogWrapper
