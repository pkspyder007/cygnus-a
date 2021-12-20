import { classes } from '@/utils/css'
import Link from 'next/link'
import React from 'react'
import Logo from '../Common/Logo'

function Desktop({ isScrolled }) {
    //TODO: Make navbar sticky on scroll
    return (
        <nav className={classes([
            [true, "hidden md:flex justify-between items-center animate-slideInDown z-50", ""],
        ])}>
            <Logo />
            <ul className="flex flex-row items-center">
                <li>
                    <Link href="/blog">
                        <a className="text-dark-gray text-xl font-bold hover:text-light-green hover:underline hover:decoration-wavy">
                            Blog
                        </a>
                    </Link>
                </li>
                <li className="ml-12">
                    <Link href="/about">
                        <a className="text-dark-gray text-xl font-bold hover:text-light-green hover:underline hover:decoration-wavy">
                            About
                        </a>
                    </Link>
                </li>
                <li className="ml-12">
                    <Link href="/projects">
                        <a className="text-dark-gray text-xl font-bold hover:text-light-green hover:underline hover:decoration-wavy">
                            Projects
                        </a>
                    </Link>
                </li>
                <li className="ml-12">
                    <Link href="/links">
                        <a className="text-dark-gray text-xl font-bold hover:text-light-green hover:underline hover:decoration-wavy">
                            Links
                        </a>
                    </Link>
                </li>
                <li className="ml-12">
                    <Link href="/snippets">
                        <a className="text-dark-gray text-xl font-bold hover:text-light-green hover:underline hover:decoration-wavy">
                            Snippets
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Desktop
