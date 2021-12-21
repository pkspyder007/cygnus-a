import Link from 'next/link'
import React from 'react'
import Logo from '../Common/Logo'

function Footer() {
    return (
        <footer className="flex flex-col lg:flex-row justify-between items-center dark:text-light-gray">
            <Logo />
            <div className="mt-6 w-full lg:w-1/4 lg:mt-0 flex justify-between items-center">
                <Link href="/">Home</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/links">Links</Link>
                <Link href="/praveen_kumar.pdf">Resume</Link>
            </div>
        </footer>
    )
}

export default Footer
