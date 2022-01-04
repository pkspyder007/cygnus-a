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
      <Container center={true}>
        <Meta title="Home | Praveen Kr." description="Welcome to my online cave. Make sure to explore around and read some articles." url="https://praveeen.in/" />
        <Hero />
      </Container>
      <Wave />
      <Container center={true}>
        <BlogWrapper posts={posts} />
      </Container>

    </div >

  )
}


export const getStaticProps = async () => {
  let posts = getAllPostMeta()
  posts = posts.sort((a, b) => sortByDate(b.date, a.date)).slice(0, posts.length > 8 ? 8 : posts.length);
  // const posts = getAllPostMeta()
  return {
    props: {
      posts
    }
  }
}

