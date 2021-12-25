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
import Meta from '@/components/Meta';
import { visit } from 'unist-util-visit';

function PostPage({ frontMatter, source }) {
    return (
        <>
            <Meta title={frontMatter.title} url={`https://praveeen.in/posts/${frontMatter.slug}`} description="All of my recent learning in form of blog articles." />
            <Container center={true}>
                <Post source={source} frontMatter={frontMatter} />
            </Container>
        </>
    )
}

export default PostPage


export const getStaticProps = async ({ params }) => {
    const postFilePath = path.join(process.cwd(), 'content', 'posts', `${params.slug}.mdx`)
    const source = fs.readFileSync(postFilePath)

    const { content, data } = matter(source)

    // const toc = await getHeadings(content);
    const fixMetaPlugin = (options = {}) => {
        function visitor(node, index, parent) {
            // if (!parent || parent.tagName !== 'pre' || node.tagName !== 'code') {
            //     return;
            // }

            node.data = { ...node.data, meta: node.properties.metastring };
        }
        return (tree) => {
            visit(tree, 'element', visitor);
        };

    };

    const mdxSource = await serialize(content, {
        mdxOptions: {
            // remarkPlugins: [],
            rehypePlugins: [rehypeSlug, fixMetaPlugin, rehypeAutolinkHeadings, (...args) => rehypePrism(...args, {
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