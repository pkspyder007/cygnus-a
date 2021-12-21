/* eslint-disable @next/next/no-img-element */
import React from 'react'
import H1 from '@/components/Common/H1'
import Container from '@/components/Layout/Container'

function ChatMod() {
    return (
        <Container center={true}>
            <div className="prose dark:prose-invert mx-auto">
                <H1 text="Youtube live chat moderator" />
                <p>
                    Moderating a youtube live stream is not an easy task. And a spammer or a bot ruins the experience of the viewers. I personally saw this problem during a few streams so I decided to make a program that solves this for me.
                    I wrote a program in node.js using express.js and Youtube API to get the messages and then warn a user if they chat something not allowed by the author.
                </p>
                <p>Built using</p>
                <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>Youtube Data API</li>
                </ul>
                <strong>This project has <mark>8 stars</mark> on github 😍</strong>
                <video autoPlay={true} controls>
                    <source src="/img/chat-mod.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <a href="https://github.com/pkspyder007/youtube-live-chat-moderator" target="_blank" rel="noopener noreferrer">Github repo</a>
            </div>
        </Container>
    )
}

export default ChatMod
