/* eslint-disable @next/next/no-img-element */
import H1 from '@/components/Common/H1'
import Container from '@/components/Layout/Container'
import React from 'react'

function IIITUAdm() {
    return (
        <Container center={true}>
            <div className="prose mx-auto">
                <H1 text="IIITU admissions" />
                <img src="/img/ia1.png" alt="liqrcart home design" />
                <small className="text-red-500 font-semibold">* Code closed source due to college policy</small>
                <p>
                    Indian Institute of Information Technology Una is an Institute of National Importance under M.H.R.D India.
                    Due to the COVID-19 the admissions process for new students was stopped due to lockdown. This project helped the college and student to register and make the admission process online.

                    An end to end solution for admission process with admin panel.
                </p>


                <strong>Accomplishments of my Admission Portal System for JoSAA counselling at IIIT UNA.</strong>

                <ul>
                    <li>Over 300 users registered.</li>

                    <li>Made the entire JOSAA counselling process to online mode for IIITUNA.</li>

                    <li>Helped students to avoid #COVID19 by allowing virtual counselling.</li>

                    <li>Saved resources over 10&apos;s of lacs rupees needed to establish proper counselling center during the pandemic.</li>

                    <li>Reduced development and management cost by a significant amount by using #AWS instead of self hosted servers.</li>

                    <li>Learning experience!</li>

                </ul>
                <p>I feel very proud for being able to deliver a project which solved a real critical problem for not only the institute but also for the students and their families during the #covid19pandemic .

                    The huge amount of resources saved by this project leaves me amazed. From travel expenses to reduces paper usage to less chances of getting infected from #covid is an proud achievement for me.</p>

                <h2>Tech Stack</h2>
                <ul>
                    <li>React.js</li>
                    <li>Ant Design</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>Google Email API</li>
                    <li>AWS</li>
                </ul>

                <h2>Process</h2>
                <blockquote>Setting up requirements</blockquote>
                <p>
                    The application was to be consumed by two parties one being the students and second the administration of institute.
                    There was a lot of data and document to be collected and stored for legal purposes hence validating all the data was a necessary part. The admisssion was a lengthy process so data persistance was also an important part.
                    Making sure the student had submiited all the necessary records and uploaded all required and application documents.

                    On the admin side showing various stats, updates, getting student records, uploaded documents, generating pdfs, etc. application responsive for the web users. Although 95% of the client were on mobile but we cannot leave the 5% out.
                </p>
                <blockquote>Data modelling</blockquote>
                <p>
                    <strong>This was really tough and interesting. 🤒</strong>

                    There was a ton of data to be managed keeping low data redundancythere were approx. 15 different forms to be submiited and uploaded. The tricky part waas some of them were mandatory and others not. On top of that few forms were applicable for certain students.
                    Keeping track of on which step a student currently is.
                </p>
                <blockquote>Brideding ends with API</blockquote>
                <p>
                    So we have out frontend components and database models now comes my favourite part working on combining both of them through a <mark>rest api</mark>.
                    This was also really challenging part. I needed to avoid as much code duplication as i could.


                    Securing the API was also a curcial part. For this i went with <mark>JSON Web Tokens</mark> and <mark>custom express.js middlewares</mark> for checkin the authentication of the request.ere it originated and similarly with the payments. Who did the payment, what they paid for, whome the paid, etc.
                </p>
                <h2>Outcome 😍</h2>
                <p>
                    A A really helpful platform for students and institute that helped them to continue the admission process with ease and maintain COVID-19 guidelines.
                </p>
            </div>
        </Container>
    )
}

export default IIITUAdm
