import { classes } from '@/utils/css'
import { NAV_LINKS } from '../../constants'
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
                {NAV_LINKS.map(({ title, url }) => (
                    <li key={title} className='ml-12'>
                        <Link href={url}>
                            <a className="text-dark-gray text-md font-bold hover:text-light-green hover:underline hover:decoration-wavy dark:text-light-gray">
                                {title}
                            </a>
                        </Link>
                    </li>
                ))}

            </ul>
        </nav>
    )
}

export default Desktop
