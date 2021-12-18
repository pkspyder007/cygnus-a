import React from 'react'
import Pill from '../Common/Pill'

const categories = [
    'React.js',
    'JavaScript',
    'Web Development',
    'CSS',
    'HTML',
    'Node.js',
    'Next.js',
    'TypeScript',
    'C',
    'C++',
]

function Sidebar() {
    return (
        <div className='col-span-7 lg:col-span-2 md:px-4'>
            <div>
                <h2 className="text-light-green text-xl mb-6 tracking-widest font-semibold">
                    Categories
                </h2>
                <div className="flex flex-wrap">
                    {categories.map((category) => (
                        <Pill text={category} key={category} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
