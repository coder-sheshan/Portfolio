import React from "react";
import CodingVideo from "../Assets/codingvid.mp4";
import ReactPlayer from "react-player";

const About = () => {
  return (
    <div>
      <section id="about">
        <h1 class="text-indigo-500 font-semibold sm:text-3xl text-2xl align-middle justify-center flex">
          About Me
        </h1>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <ReactPlayer
                playing={true}
                loop={true}
                controls={true}
                url={CodingVideo}
              />
            </div>

            <div class="lg:py-20">
              <h2 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-xl font-bold text-transparent sm:text-3xl">
                Full Stack Develper
              </h2>

              <p class="mt-4 text-white text-justify">
                I'm Sheshan Raj V and I am currently majoring in the field of
                Computer Science. I love the field of computer science as it
                involves bit of every other field. I love learning new
                technologies. I am a budding MERN full-stack developer. I have
                now completed the Full-Stack course. I have done many projects
                which are listed below, which gave me professional experience in
                the field of computer science. I am also familiar with the range
                of Python.I worked on a (Habits Financial App) mobile app
                project in React Native as well as a shopping cart E-Commerce
                project in Next.js.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
