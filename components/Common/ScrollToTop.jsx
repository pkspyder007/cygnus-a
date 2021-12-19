import React from 'react'
import useSound from 'use-sound'

function ScrollToTop() {
    const [play] = useSound('/sounds/switch-on.mp3')
    return (
        <div className="fixed bottom-16 right-2 md:right-12 rounded-full bg-light-green h-12 w-12" onClick={play}>
            <a href="#HOME">
                {/* // eslint-disable-next-line @next/next/no-img-element */}
                <img src="/img/top.png" />
            </a>
        </div>
    )
}

export default ScrollToTop
