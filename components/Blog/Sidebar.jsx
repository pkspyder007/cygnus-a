import React from 'react'
import Pill from '../Common/Pill'
import useSound from 'use-sound'
import Link from 'next/link'
import { CATEGORIES } from '../../constants'


function Sidebar() {
    const [play] = useSound('/sounds/plunger.mp3')
    return (
        <div className='col-span-7 lg:col-span-2 md:px-4'>
            <div>
                <h2 className="text-light-green text-xl mb-6 tracking-widest font-semibold">
                    Categories
                </h2>
                <div className="flex flex-wrap">
                    {Object.keys(CATEGORIES).map((category) => {
                        return (
                            <Link href={`/posts/categories/${category}`} passHref key={CATEGORIES[category]} >
                                <a>
                                    <Pill onMouseEnter={() => play()} onMouseLeave={() => stop()} text={CATEGORIES[category]} />
                                </a>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
