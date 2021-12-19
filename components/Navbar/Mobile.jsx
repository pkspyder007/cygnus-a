import React, { useState } from 'react'
import Logo from '../Common/Logo'
import { XCircleIcon, MenuIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { classes } from '@/utils/css';

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
                    [true, 'z-50 absolute inset-0 md:hidden bg-light-green w-screen h-screen nimate-duration-[0.5s] animate-slideInLeft', '']
                ])}>
                    <div className='flex flex-row justify-around items-center w-full my-24'>
                        <XCircleIcon className="text-white h-16 w-16 hover:text-dark-green" onClick={toggleMenu} />
                    </div>
                    <ul className="flex flex-col justify-center items-center">
                        <li>
                            <Link href="/blog" >
                                <a onClick={toggleMenu} className="text-white text-5xl hover:text-dark-gray hover:underline hover:decoration-wavy">
                                    Blog
                                </a>
                            </Link>
                        </li>
                        <li className="mt-12">
                            <Link href="/about">
                                <a onClick={toggleMenu} className="text-white text-5xl hover:text-dark-gray hover:underline hover:decoration-wavy">
                                    About
                                </a>
                            </Link>
                        </li>
                        <li className="mt-12">
                            <Link href="/projects">
                                <a onClick={toggleMenu} className="text-white text-5xl hover:text-dark-gray hover:underline hover:decoration-wavy">
                                    Projects
                                </a>
                            </Link>
                        </li>
                        <li className="mt-12">
                            <Link href="/links">
                                <a onClick={toggleMenu} className="text-white text-5xl hover:text-dark-gray hover:underline hover:decoration-wavy">
                                    Links
                                </a>
                            </Link>
                        </li>
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
