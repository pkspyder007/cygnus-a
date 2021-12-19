import React from 'react'
import Lottie from 'react-lottie'

import animationData from '@assets/hero-lottie.json'

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
};

function Hero() {
    return (
        <div className='flex flex-col-reverse items-center md:flex-row mt-28'>
            <div>
                <h1 className="animate-slideInLeft mt-6 mb-20 text-4xl lg:text-6xl font-bold text-dark-green md:text-6xl md:px-24 md:leading-12">
                    Hi, I&apos;m <span className="text-light-green">Praveen</span>
                    <br />
                    A software engineer working @ <span className="text-light-green">Quizizz</span>
                </h1>
            </div>
            <div className='-mt-24 mb-12 md:mt-0 md:mb-0'>
                <Lottie
                    options={defaultOptions}
                />
            </div>
        </div>
    )
}

export default Hero
