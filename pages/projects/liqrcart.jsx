/* eslint-disable @next/next/no-img-element */
import H1 from '@/components/Common/H1'
import Container from '@/components/Layout/Container'
import React from 'react'

function Liqrcart() {
    return (
        <Container center={true}>
            <div className="prose dark:prose-invert mx-auto">
                <H1 text="Liqrcart" />
                <img src="/img/lq1.png" alt="liqrcart landing" />
                <p>
                    LiqrCart is an India based startup currently in prototyping phase. It emerged to solve the problem of unavailibility of beverages due lockdown imposed in bar and pubs due to COVID-19. It helps the vendors to sell their beverages online through an e-commerce portal.

                    LiqrCart connected local wine and other beverages shop with their regular customers who were unable to get the service due to the lockdown.
                </p>
                <h2>Tech Stack</h2>
                <ul>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>Google APIs</li>
                    <li>Instamojo - payment gatewat</li>
                    <li>MSG91 - SMS gateway</li>
                    <li>Heroku</li>
                </ul>
                <h2>My role and work</h2>
                <blockquote>Full Stack Developer</blockquote>
                <p>
                    As the only technical person on the team i was responsible from development to deployment phase.

                    I worked closely with the designer and made sure that the designs were feasable as per our initially thought of making a PWA in React.js

                    I also worked with the marketing team to get the feedback of not only our initial customer but also vendors.
                </p>
                <h2>Process</h2>
                <blockquote>Breaking down the design</blockquote>
                <img src="/img/lq3.png" alt="liqrcart home design" />
                <p>
                    95% of our audience was mobile users as they lack high speed internet connectivity. So keeping the UI as close as a native app was the best option and this allowed me to re-use  multiple components across the application.

                    The project had 3 levels of users. Client, Vender and The Admin.
                    The vendor and admin section shared a lot of similar components and logic as product views, stats, etc.

                    The next step was to make the application responsive for the web users. Although 95% of the client were on mobile but we cannot leave the 5% out.
                </p>
                <img src="/img/lq2.png" alt="liqrcart start design" />
                <blockquote>Data modelling</blockquote>
                <img src="/img/lq4.png" alt="liqrcart home design" />
                <p>
                    I took my whiteboard and tried to come up with some main entities the app we will be having. Laid them on the whiteboard and created some relationship with each other.
                    For example:
                    An user should be able to access all his/her previous orders and each order should have the details of the products.
                    Now the product should have a refrence to the shop from where it originated and similarly with the payments. Who did the payment, what they paid for, whome the paid, etc.
                </p>
                <blockquote>Brideding ends with API</blockquote>
                <img src="/img/lq3.png" alt="liqrcart API" />
                <p>
                    So we have out frontend components and database models now comes my favourite part working on combining both of them through a <mark>rest api</mark>.
                    This was also really challenging part. I needed to avoid as much code duplication as i could.


                    Securing the API was also a curcial part. For this i went with <mark>JSON Web Tokens</mark> and <mark>custom express.js middlewares</mark> for checkin the authentication of the request.ere it originated and similarly with the payments. Who did the payment, what they paid for, whome the paid, etc.
                </p>
                <h2>Outcome 😍</h2>
                <p>
                    A fully functional e-commerce platform prototype for clients, vendors and the administration.
                    A beautiful analytical admin dashboard with modern features critical to an e-commerce platform.


                    A lot of new learning experience.
                </p>
                <a href="https://github.com/pkspyder007/mern-stack-ecommerce" target="_blank" rel="noopener noreferrer">Github repo</a>

            </div>
        </Container>
    )
}

export default Liqrcart
