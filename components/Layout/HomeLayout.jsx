/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { useState, useCallback, useEffect } from 'react'
import Logo from '../Common/Logo';
import ScrollToTop from '../Common/ScrollToTop';
import Navbar from '../Navbar/Navbar'
import Container from './Container'

function HomeLayout({ children }) {
    const [scrolled, setScrolled] = useState(false);
    // const [isDark, setIsDark] = useState(false);

    const handleScroll = useCallback(() => {
        if (window.pageYOffset > 200) {
            if (scrolled === false) setScrolled(true);
        }
        if (window.pageYOffset < 200) {
            setScrolled(false);
        }
    }, [scrolled])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [handleScroll]);


    // const toggleTheme = () => {
    //     const body = document.body;
    //     if (body.classList.contains('dark')) {
    //         body.classList.remove('dark');
    //         setIsDark(false);
    //     } else {
    //         body.classList.add('dark');
    //         setIsDark(true);
    //     }
    // }

    return (
        <div className="relative" id="HOME">
            <img src="/img/blobs-01.svg" className="absolute inset-0 -z-10" alt="" />
            <Container center={true}>
                <Navbar isScrolled={scrolled} />

            </Container>
            {children}
            <Container center={true}>
                <footer className="flex flex-col lg:flex-row justify-between items-center">
                    <Logo />
                    <div className="mt-6 w-full lg:w-1/4 lg:mt-0 flex justify-between items-center">
                        <Link href="/">Home</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/links">Links</Link>
                        <Link href="/resume">resume</Link>
                    </div>
                </footer>
            </Container>
            {scrolled && <ScrollToTop />}
        </div>
    )
}

export default HomeLayout
