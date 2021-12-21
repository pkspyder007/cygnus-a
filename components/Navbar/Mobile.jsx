import React, { useState } from 'react'
import Logo from '../Common/Logo'
import { XCircleIcon, MenuIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { classes } from '@/utils/css';
import { NAV_LINKS } from '../../constants';

function Mobile() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleMenu = () => {
        setIsVisible(!isVisible);
    }



    return (
        <>
            {isVisible ? (
                <nav className={classes([
                    [isVisible, 'flex flex-col items-center', 'hidden animate-duration-[0.5s] animate-slideOutLeft'],
                    [true, 'z-50 absolute inset-0 md:hidden bg-light-green dark:bg-dark-green w-screen h-screen nimate-duration-[0.5s] animate-slideInLeft', '']
                ])}>
                    <div className='flex flex-row justify-around items-center w-full my-12'>
                        <XCircleIcon className="text-white h-16 w-16 hover:text-dark-green dark:hover:text-light-green" onClick={toggleMenu} />
                    </div>
                    <ul className="flex flex-col justify-center items-center">
                        {NAV_LINKS.map(({ title, url }) => (
                            <li key={title} className='mt-6'>
                                <Link href={url}>
                                    <a className="text-white text-5xl hover:text-light-green hover:underline hover:decoration-wavy dark:text-light-green" onClick={toggleMenu}>
                                        {title}
                                    </a>
                                </Link>
                            </li>
                        ))}

                    </ul>
                </nav>
            ) : (
                <div className='flex flex-row justify-between items-center md:hidden w-full my-4 px-4 animate-slideInDown'>
                    <Logo />
                    <span className="rounded-full bg-light-green p-2">
                        <MenuIcon className="h-8 w-8 text-light-gray" onClick={toggleMenu} />
                    </span>
                </div>
            )}
        </>
    )
}

export default Mobile
