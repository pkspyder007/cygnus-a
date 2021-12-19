import BlogWrapper from '@/components/Blog/BlogWrapper'
import Hero from '@/components/Hero/Hero'
import Container from '@/components/Layout/Container'
import Wave from '@/components/Wave'
import Head from 'next/head'
import { getAllPostMeta } from '@/utils/blog'
import { sortByDate } from '../utils'
import Meta from '@/components/Meta'

export default function Home(
    { posts }
) {
    return (
        <div className="">
            <Head>
                <title>Blog | Praveen kr.</title>
                <Meta title="Blog | Praveen Kr." description="Posts related to web development and software engineering" url="https://praveeen.in/blog" />
            </Head>
            <Container center={true}>
                <BlogWrapper posts={posts} />
            </Container>

        </div >

    )
}


export const getStaticProps = async () => {
    let posts = getAllPostMeta()
    posts = posts.sort((a, b) => sortByDate(b.date, a.date));
    return {
        props: {
            posts
        }
    }
}

