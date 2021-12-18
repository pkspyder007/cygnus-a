import { classes } from '@/utils/css'
import React from 'react'

function Container({ children, center = false }) {
    return (
        <div className={
            classes([
                [true, 'max-w-7xl px-4 py-4 z-20', ''],
                [center, 'mx-auto', '']
            ])}>
            {children}
        </div>
    )
}

export default Container
