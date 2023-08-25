import React from 'react';
import Project_Img1 from '../Assets/Project1.png';
import Project_IMg2 from '../Assets/projects2.png';
import project_Todo from '../Assets/Todo.png';
import LogIn from '../Assets/login.png';
import Habits from '../Assets/habits.png'
import WorkInProgress from '../Assets/WIP.jpg';

const Projects = () => {
    return (
        <div>
            <section id='projects' class="bg-gray-900 text-white">
                <div
                    class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
                >
                    <div class="mx-auto max-w-lg text-center">
                        <h2 class="text-2xl text-indigo-500 font-semibold sm:text-3xl">My Projects</h2>
                    </div>

                    <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <a href="https://sheshan-raj-cb9cf3.netlify.app/" target='blank' rel="noreferrer" class="block">
                            <img
                                alt="Signage"
                                src={Project_Img1}
                                class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                            />

                            <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                                <strong class="font-medium">Bootstrap</strong>

                                <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                                <p class="mt-0.5 opacity-50 sm:mt-0">Website / Bootstrap</p>
                            </div>
                        </a>

                        <a href="https://portfolio-nu-one-34.vercel.app/" target='blank' rel="noreferrer" class="block">
                            <img
                                alt="Signage"
                                src={Project_IMg2}
                                class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                            />

                            <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                                <strong class="font-medium">Tailwind Css</strong>

                                <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                                <p class="mt-0.5 opacity-50 sm:mt-0">Portfolio / Email.js</p>
                            </div>
                        </a>

                        <a href="https://sheshan-raj-1d655d.netlify.app/" target='blank' rel="noreferrer" class="block">
                            <img
                                alt="Signage"
                                src={project_Todo}
                                class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                            />

                            <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                                <strong class="font-medium">ToDo List</strong>

                                <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                                <p class="mt-0.5 opacity-50 sm:mt-0">Vannila Javascript</p>
                            </div>
                        </a>
                        {/* phrase=====2 */}
                        <a href="https://mern-jwt-token.vercel.app/" target='blank' rel="noreferrer" class="block">
                            <img
                                alt="Signage"
                                src={LogIn}
                                class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                            />

                            <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                                <strong class="font-medium">JWT_Token</strong>

                                <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                                <p class="mt-0.5 opacity-50 sm:mt-0">Form / useFormik</p>
                            </div>
                        </a>

                        <a href="https://www.javatpoint.com/javascript-tutorial" target='blank' rel="noreferrer" class="block">
                            <img
                                alt="Signage"
                                src={WorkInProgress}
                                class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                            />

                            <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                                <strong class="font-medium">E-Commerce</strong>

                                <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                                <p class="mt-0.5 opacity-50 sm:mt-0">Next.js / TypeScript</p>
                            </div>
                        </a>

                        <a href="https://www.javatpoint.com/javascript-tutorial" target='blank' rel="noreferrer" class="block">
                            <img
                                alt="Signage"
                                src={WorkInProgress}
                                class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                            />

                            <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                                <strong class="font-medium">SKS Women's Center</strong>

                                <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                                <p class="mt-0.5 opacity-50 sm:mt-0">RealTime / Nodemailer</p>
                            </div>
                        </a>
                        {/* phrase===3 */}
                        {/* <a href="https://www.javatpoint.com/javascript-tutorial" target='blank' rel="noreferrer" class="block">
                            <img
                                alt="Signage"
                                src="https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                                class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                            />

                            <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                                <strong class="font-medium">Current Loacation</strong>

                                <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                                <p class="mt-0.5 opacity-50 sm:mt-0">MERN / City_State API</p>
                            </div>
                        </a> */}

                        <a href="https://play.google.com/store/apps?utm_source=apac_med&hl=en-IN&utm_medium=hasem&utm_content=Oct0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-in-1003227-med-hasem-ap-Evergreen-Oct0121-Text_Search_BKWS-BKWS%7cONSEM_kwid_43700064490253544_creativeid_480915691381_device_c&gclid=Cj0KCQjw3JanBhCPARIsAJpXTx5WhhrIOQ3earlJfPYMSEpR3ywdSZum90xQ8e3MyEv8cu2AAHHwzUMaAtc5EALw_wcB&gclsrc=aw.ds" target='blank' rel="noreferrer" class="block">
                            <img
                                alt="Signage"
                                src={Habits}
                                class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                            />

                            <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                                <strong class="font-medium">Habits</strong>

                                <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                                <p class="mt-0.5 opacity-50 sm:mt-0">Financial Mobile App/ ReactNaive</p>
                            </div>
                        </a>

                        <a href="https://www.javatpoint.com/javascript-tutorial" target='blank' rel="noreferrer" class="block">
                            <img
                                alt="Signage"
                                src={WorkInProgress}
                                class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                            />

                            <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                                <strong class="font-medium">Netflix</strong>

                                <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                                <p class="mt-0.5 opacity-50 sm:mt-0"> ReduxToolkit / Social Media App</p>
                            </div>
                        </a>

                        {/* phrase===4 */}

                        {/* <a href="https://www.javatpoint.com/javascript-tutorial" target='blank' rel="noreferrer" class="block">
                            <img
                                alt="Signage"
                                src="https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                                class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                            />

                            <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                                <strong class="font-medium">Chatting App</strong>

                                <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                                <p class="mt-0.5 opacity-50 sm:mt-0">Node.js / Socket.io</p>
                            </div>
                        </a>

                        <a href="https://www.javatpoint.com/javascript-tutorial" target='blank' rel="noreferrer" class="block">
                            <img
                                alt="Signage"
                                src="https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                                class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                            />

                            <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                                <strong class="font-medium">Loacation</strong>

                                <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                                <p class="mt-0.5 opacity-50 sm:mt-0">MERN / City_State API</p>
                            </div>
                        </a>

                        <a href="https://www.javatpoint.com/javascript-tutorial" target='blank' rel="noreferrer" class="block">
                            <img
                                alt="Signage"
                                src="https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                                class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                            />

                            <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                                <strong class="font-medium">Payment Gateway</strong>

                                <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                                <p class="mt-0.5 opacity-50 sm:mt-0">Banking / Transactions</p>
                            </div>
                        </a> */}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects
