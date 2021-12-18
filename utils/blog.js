import * as fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

export const getAllPostPaths = () => {
    const posts = fs.readdirSync(path.join(process.cwd(), 'content', 'posts'))
    const postPaths = posts.map(post => {
        const postName = post.split('.')[0]
        return `/posts/${postName}`
    })
    return postPaths;
}

export const getAllPostMeta = () => {
    const posts = fs.readdirSync(path.join(process.cwd(), 'content', 'posts'))
    const postsMeta = posts.map(post => {
        const { data } = matter(fs.readFileSync(path.join(process.cwd(), 'content', 'posts', `${post}`)))
        return data
    })
    return postsMeta;
}

