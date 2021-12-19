import React from 'react'
import Lottie from 'react-lottie'
import space from '@assets/404-space.json'
import Link from 'next/link'
import Head from 'next/head'
// import pixeks from '@assets/404-pixels.json'

function NotFound() {
    return (
        <div className="flex flex-col items-center">
            <Head>
                <title>404 | Praveen kr.</title>
            </Head>
            <div className="w-full md:w-2/3">
                <Lottie
                    options={{
                        loop: true,
                        autoplay: true,
                        animationData: space,
                    }}
                />
            </div>
            <Link href={'/'} passHref>
                <button className="bg-light-green p-2 rounded-md text-white mt-4">Home</button>
            </Link>
        </div>
    )
}

export default NotFound
