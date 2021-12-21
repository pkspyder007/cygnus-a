import React from 'react'
import Highlight, { defaultProps } from "prism-react-renderer";

function HighlightCode({ code }) {
    return (
        <Highlight {...defaultProps} theme={undefined} code={code} language="jsx">
            {({ className, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={{}}>
                    {tokens.map((line, i) => {
                        const lineProps = getLineProps({ line, key: i });
                        return (
                            <div key={line} {...lineProps} className={`${lineProps.className} code-line line-number`} line={i + 1}>
                                {line.map((token, key) => (
                                    <span key={key} {...getTokenProps({ token, key })} />
                                ))}
                            </div>
                        )

                    })}
                </pre>
            )}
        </Highlight>
    )
}

export default HighlightCode
