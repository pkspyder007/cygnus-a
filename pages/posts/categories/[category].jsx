import PostsList from '@/components/Blog/PostsList'
import { getAllPostMeta } from '@/utils/blog'
import { CATEGORIES } from '../../../constants'
import React from 'react'
import Container from '@/components/Layout/Container'
import Meta from '@/components/Meta'

function CategoryPost({ posts, category }) {
    return (
        <>
            <Meta title={`${CATEGORIES[category]} Articles`} url={`https://praveeen.in/posts/${CATEGORIES[category]}`} description={`All posts related to ${CATEGORIES[category]}.`} />
            <Container center={true}>
                <PostsList posts={posts} title={CATEGORIES[category]} />
            </Container>
        </>
    )
}

export default CategoryPost

export const getStaticProps = ({ params }) => {
    const posts = getAllPostMeta();
    const filteredPosts = posts.filter(post => post.category?.includes(params.category));

    return {
        props: {
            posts: filteredPosts,
            category: params.category
        }
    }
}

export const getStaticPaths = async () => {
    const categories = Object.keys(CATEGORIES)
    const paths = categories.map(category => (`/posts/categories/${category}`))
    return {
        paths,
        fallback: false
    }
}