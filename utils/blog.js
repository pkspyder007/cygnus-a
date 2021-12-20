import * as fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import readingTime from 'reading-time'

export const getAllPostPaths = () => {
    const posts = fs.readdirSync(path.join(process.cwd(), 'content', 'posts'))
    const postPaths = posts.map(post => {
        const postName = post.split('.')[0]
        return `/posts/${postName}`
    })
    return postPaths;
}

export const getAllSnippetPaths = () => {
    const posts = fs.readdirSync(path.join(process.cwd(), 'content', 'snippets'))
    const snippetPaths = posts.map(post => {
        const snippetName = post.split('.')[0]
        return `/snippets/${snippetName}`
    })
    return snippetPaths;
}


export const getAllPostMeta = () => {
    const posts = fs.readdirSync(path.join(process.cwd(), 'content', 'posts'))
    const postsMeta = posts.map(post => {
        const { data, content } = matter(fs.readFileSync(path.join(process.cwd(), 'content', 'posts', `${post}`)))
        data['readingTime'] = readingTime(content).text;
        return data
    })
    return postsMeta;
}

export const getAllSnippetMeta = () => {
    const snippets = fs.readdirSync(path.join(process.cwd(), 'content', 'snippets'))
    const snippetsMeta = snippets.map(snippet => {
        const { data } = matter(fs.readFileSync(path.join(process.cwd(), 'content', 'snippets', `${snippet}`)))
        return data
    })
    return snippetsMeta;
}
