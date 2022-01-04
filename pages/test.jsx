import { bundleMDX } from 'mdx-bundler'
import { getMDXComponent } from 'mdx-bundler/client'
import React from 'react'

export default function Home({ code, frontmatter }) {
    const Component = React.useMemo(() => getMDXComponent(code), [code])
    return (
        <div><Component /></div>
    )
}


const mdxSource = `
---
title: Example Post
published: '2021-02-13'
description: This is some description
---

# Wahoo

import Demo from './demo'

Here's a **neat** demo:

<Demo />
`.trim()

export const getStaticProps = async () => {

    const result = await bundleMDX({
        source: mdxSource,
        files: {
            './demo.tsx': `
  import * as React from 'react'
  
  function Demo() {
    return <div>Neat demo!</div>
  }
  
  export default Demo
      `,
        },
    })

    const { code, frontmatter } = result

    return {
        props: {
            code,
            frontmatter
        }
    }

}