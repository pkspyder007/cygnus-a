import Link from 'next/link'
import React from 'react'
import Logo from '../Common/Logo'

function Desktop() {
    return (
        <nav className="hidden md:flex justify-between items-center animate-slideInDown">
            <Logo />
            <ul className="flex flex-row items-center">
                <li>
                    <Link href="/">
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
            </ul>
        </nav>
    )
}

export default Desktop
