import { getAllPostPaths } from '@/utils/blog'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize'
import Container from '@/components/Layout/Container';
import Post from '@/components/Blog/Post';
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

function PostPage({ frontMatter, source }) {
    return (
        <Container center={true}>
            <Post source={source} frontMatter={frontMatter} />
        </Container>
    )
}

export default PostPage


export const getStaticProps = async ({ params }) => {
    const postFilePath = path.join(process.cwd(), 'content', 'posts', `${params.slug}.mdx`)
    const source = fs.readFileSync(postFilePath)

    const { content, data } = matter(source)

    // const toc = await getHeadings(content);

    const mdxSource = await serialize(content, {
        mdxOptions: {
            // remarkPlugins: [],
            rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, (...args) => rehypePrism(...args, {
                showLineNumbers: true
            })],
        },
        scope: data,
    })

    return {
        props: {
            source: mdxSource,
            frontMatter: data,
            // toc
        },
    }
    console.log(paths);
}

export const getStaticPaths = async () => {
    const paths = getAllPostPaths();
    return {
        paths,
        fallback: false,
    }
}