/* eslint-disable @next/next/no-img-element */
import React, { useState, useCallback, useEffect } from 'react'
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
            {scrolled && <ScrollToTop />}
        </div>
    )
}

export default HomeLayout
