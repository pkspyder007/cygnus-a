import HighlightCode from "../Common/HighlightCode";
import Tabs from "../Common/Tabs";

import { useState, useRef } from 'react'

const Pre = (props) => {
    const textInput = useRef(null)
    const [hovered, setHovered] = useState(false)
    const [copied, setCopied] = useState(false)

    const onEnter = () => {
        setHovered(true)
    }
    const onExit = () => {
        setHovered(false)
        setCopied(false)
    }
    const onCopy = () => {
        setCopied(true)
        navigator.clipboard.writeText(textInput.current.textContent)
        setTimeout(() => {
            setCopied(false)
        }, 2000)
    }

    return (
        <div ref={textInput} onMouseEnter={onEnter} onMouseLeave={onExit} className="relative bg-none">
            {hovered && (
                <button
                    aria-label="Copy code"
                    type="button"
                    className={`absolute right-2 top-2 w-8 h-8 p-1 rounded border-2 bg-gray-300  ${copied
                        ? 'focus:outline-none focus:border-green-400 border-green-400'
                        : 'border-gray-300'
                        }`}
                    onClick={onCopy}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="none"
                        className={copied ? 'text-green-400' : 'text-gray-800'}
                    >
                        {copied ? (
                            <>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                                />
                            </>
                        ) : (
                            <>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                />
                            </>
                        )}
                    </svg>
                </button>
            )}

            <pre className="pre-custom">{props.children}</pre>
        </div>
    )
}

export default Pre

/* eslint-disable @next/next/no-img-element */
export const MDXComponents = {
    h1: props => <h1 className="text-light-green" {...props} />,
    img: (props) => (
        <div className="relative not-prose my-[2em] first:mt-0 last:mb-0 rounded-lg overflow-hidden">
            <img alt="" {...props} />
            <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10" />
        </div>
    ),
    pre: props => (<Pre {...props} >
    </Pre>),
    Tabs: Tabs,
    HighlightCode: props => (<HighlightCode {...props} />)
}