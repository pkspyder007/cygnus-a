import HighlightCode from "../Common/HighlightCode";
import Tabs from "../Common/Tabs";

/* eslint-disable @next/next/no-img-element */
export const MDXComponents = {
    h1: props => <h1 className="text-light-green" {...props} />,
    img: (props) => (
        <div className="relative not-prose my-[2em] first:mt-0 last:mb-0 rounded-lg overflow-hidden">
            <img alt="" {...props} />
            <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10" />
        </div>
    ),
    pre: props => (<pre {...props} className="language-bash" >
        {props.children}
    </pre >),
    Tabs: Tabs,
    HighlightCode: props => (<HighlightCode {...props} />)
}