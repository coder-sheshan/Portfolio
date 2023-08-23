import React from 'react';
import Coding from '../Assets/coding.jpg'

const About = () => {
    return (
        <div>
            <section id='about'>
                <h1 class="text-indigo-500 font-semibold sm:text-3xl text-2xl align-middle justify-center flex">About Me</h1>
                <div
                    class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
                >
                    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div
                            class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
                        >
                            <img
                                alt="Party"
                                // src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                src={Coding}     
                                class="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>

                        <div class="lg:py-20">
                            <h2 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-xl font-bold text-transparent sm:text-3xl">Full Stack Develper</h2>

                            <p class="mt-4 text-white text-justify">
                                I'm Sheshan Raj V and I am currently majoring in the field of Computer Science. I love the field of computer science as it
                                involves bit of every other field. I love learning new technologies. I am a budding MERN full-stack developer. I have now
                                completed the Full-Stack course. I have done many projects which are listed below, which gave me
                                professional experience in the field of computer science. I am also familiar with the range of Python.I worked on a (Habits
                                Financial App) mobile app project in React Native as well as a shopping cart E-Commerce project in Next.js.
                            </p>

                            {/* <a
                                href="#"
                                class="mt-8 inline-block rounded bg-purple-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-purple-800 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Get Started Today
                            </a> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
