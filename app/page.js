"use client"

import Image from "next/image";
import Navbar from "./components/Navbar";
import Typewriter from 'typewriter-effect';
import { useState } from "react";
import Footer from "./components/Footer";
import Link from "next/link";
import { MdEmail } from "react-icons/md";


export default function Home() {
  const [menu, setMenu] = useState(false)
  const [data, setData] = useState({ src: "", title: "", category: "", description: "", isSelected: "", date: "" })

  const getUrl = (iTem) => {
    setData({ ...iTem, isSelected: true })
  }


  const video = [
    {
      src: "/y.gif",
      date: "January 2022",
      category: "youtube",
      title: "Youtube Video Editing",
      description: "A YouTube video is the language of modern communication. Through skilful editing, we'll translate your ideas into a visual story that connects with your audience on a profound level.",
      isSelected: false,
      videos: [
        { url: "https://drive.google.com/file/d/17opsryUz5Pn_1J015dc5hcB43FjADASc/preview" },
        { url: "https://drive.google.com/file/d/1CnOHur1BmtqrXY0DrJURR6xoYWItoSxv/preview" },
        { url: "https://drive.google.com/file/d/1pVuSk8G8H0mi20matMi2fMlGWUpO-hYp/preview" },
      ]
    },
    {
      src: "/t.gif",
      category: "travel",
      date: "March 2023",
      title: "Travel Video Editing",
      description: "An engaging, personal video diary that documents a traveller's adventures and experiences, offering viewers unique insights, tips, and inspiration for their journeys.",
      isSelected: false,
      videos: [
        { url: "https://drive.google.com/file/d/1w5AaYREEYzzJ5Q3Ffx5a__Es82HfCz1l/preview" },
        { url: "https://drive.google.com/file/d/1HMNS_O6Jm5bzqiD8RDPkNV2MyOBpKo24/preview" }
      ]
    },
    {
      src: "/w.gif",
      category: "wedding",
      date: "July 2022",
      title: "Wedding Video Editing",
      description: "Wedding videos: Captivating and heartfelt cinematic mementoes that preserve precious moments and emotions, allowing couples to relive their special day for years to come.",
      isSelected: false,
      videos: [
        { url: "https://drive.google.com/file/d/1QDXlvJh84JIEN0sHBlRe-_lSWv4-UXCM/preview" },
        { url: "https://drive.google.com/file/d/1oL6cC09Qvz1UHLnlTSqQym2zd7TisP8j/preview" },
        { url: "https://drive.google.com/file/d/17rNtS3G2h-LTejdD56vfY84Mwq9JYcr_/preview" },
      ]
    }
  ]
  const service = [
    {
      src: "/adobe-premiere-svgrepo-com.svg",
      alt: "logo1",
      name: "Adobe Premiere Pro",
      desc: "Adobe Premiere Pro is a powerful, industry-standard tool for professional video editing."
    },
    {
      src: "/adobe-after-effects-svgrepo-com.svg",
      alt: "logo2",
      name: "Adobe After Effects",
      desc: "Motion graphics and visual effects software for creating dynamic animations and compositions."
    },
    {
      src: "/adobe-photoshop-svgrepo-com.svg",
      alt: "logo3",
      name: "Adobe Photoshop",
      desc: "Powerful image editing software for creating, enhancing, and transforming photos and graphics."
    },
    {
      src: "/icons8-davinci-resolve.svg",
      alt: "logo4",
      name: "Davinci Resolve",
      desc: "Powerful video editing, color correction, visual effects, and udio post-production software."
    },
    {
      src: "/icons8-final-cut-pro-new.svg",
      alt: "logo5",
      name: "Final Cut Pro",
      desc: "Advanced video editing software for professionals with powerful tools and seamless Mac integration."
    },
    {
      src: "/adobe-lightroom-svgrepo-com.svg",
      alt: "logo6",
      name: "Adobe Lightroom",
      desc: "Advanced video editing software for professionals with powerful tools and seamless Mac integration."
    },
  ]
  return (
    <>
      <Navbar />

      <div id="home" className="bg-[url('/video-edit.jpg')] bg-cover bg-center h-[30rem] relative z-0">
        <div className="bg-[#2e2e2e] absolute w-full inset-0 opacity-90"></div>
        <div
          className="home-content relative flex items-center justify-center flex-col h-full px-4 md:px-8 lg:px-20 z-10">
          <h1 className="text-[#f8f8f8] text-xl md:text-2xl font-semibold mb-1">HELLO I&apos;M</h1>
          <h1 className="text-[#f2b713] font-extrabold text-2xl md:text-5xl mb-1"><Typewriter
            options={{
              strings: ['Video Editor', 'Motion Designer', "Graphic Designer"],
              autoStart: true,
              loop: true,
            }}
          /></h1>
          <h1 className="text-[#f2b713] font-extrabold text-2xl md:text-5xl mb-1"><span className="auto-type"></span></h1>
          <p className="text-[#f8f8f8] font-light text-center mb-6 text-sm md:text-base lg:text-lg">With over 4 years
            of experience in Adobe Premiere Pro, I offer professional video editing services for commercials,
            music videos, YouTube content, and short films, delivering stunning visuals and high-quality
            results.</p>
          <Link href={'/'}
            className="bg-transparent text-sm lg:text-lg px-6 lg:px-8 py-2 border-[2px] rounded-full font-[400] text-[#f8f8f8] border-[#f2b713] relative before:content-[''] before:absolute before:left-0 before:top-0 before:w-[0%] before:h-full before:bg-[#f2b713] before:z-[-1] before:transition-all before:duration-[400ms] before:ease-in hover:before:w-full hover:text-[#2e2e2e] hover:font-[600] duration-[400ms]transition-all cursor-pointer overflow-hidden">
            Download CV
          </Link>
        </div>
      </div>

      <div id="about" className="bg-[#2e2e2e]">
        <div
          className="flex flex-col lg:flex-row justify-center items-center py-16 lg:py-20 px-6 lg:px-24 gap-8 lg:gap-16 AnimationController">
          <Image width={200} height={200} src="/profile.jpg" className="lg:w-[280px] rounded-full" alt="Profile" />
          <div className="about-content flex flex-col gap-4 lg:gap-5">
            <h1 className="text-[#f2b713] text-xl lg:text-2xl font-semibold">About Me</h1>
            <p className="text-[#f8f8f8] font-light text-sm md:text-base lg:text-lg">I&apos;m Talal, a professional video editor with 4 years of experience producing high-quality, engaging content. Whether it&apos;s for YouTube, social media, corporate use, or a personal project, I deliver customized video editing services tailored to your needs. With a strong background in editing and social media marketing, I bring a sharp eye for visuals and storytelling. I also offer unlimited revisions to ensure your complete satisfaction and guarantee a quick turnaround.</p>
            <p className="text-[#f8f8f8] font-light text-sm md:text-base lg:text-lg">My expertise in Premiere Pro
              ensures a smooth editing process and high-quality results. Let&apos;s create something amazing together!
            </p>
            <div className="btn-cont flex flex-col sm:flex-row items-center gap-4">
              <Link href={'/'}
                className="bg-[#f2b713] text-sm lg:text-lg px-8 py-2 border-[2px] rounded-full font-[600] text-[#2e2e2e] z-[1] border-[#f2b713] relative before:content-[''] before:absolute before:left-0 before:top-0 before:w-[0%] before:h-full before:bg-[#2e2e2e] before:z-[-1] before:transition-all before:duration-[400ms] before:ease-in hover:before:w-full hover:text-[#f8f8f8] hover:font-[500] duration-[400ms] transition-all cursor-pointer overflow-hidden">
                Download CV
              </Link>
              <a href="https://drive.google.com/drive/folders/1LblnDvngapJrnMAPGKw96qRbmndKQGO3?usp=sharing"
                target="_blank"
                className="bg-transparent text-sm lg:text-lg z-[1] px-12 lg:px-14 py-2 border-[2px] rounded-full font-[400] text-[#f8f8f8] border-[#f2b713] relative before:content-[''] before:absolute before:left-0 before:top-0 before:w-[0%] before:h-full before:bg-[#f2b713] before:z-[-1] before:transition-all before:duration-[400ms] before:ease-in hover:before:w-full hover:text-[#2e2e2e] hover:font-[600] duration-[400ms]transition-all cursor-pointer overflow-hidden">
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="skills" className="bg-[#2e2e2e] pt-12">
        <div>
          <h1 className="text-center text-4xl font-[600] text-[#f2b713]">Skills</h1>
        </div>
        <div className="flex flex-wrap gap-20 justify-center py-16">
          {service.map((item, index) => {
            return <div key={index}
              className="box1 bg-[#282826] h-40 w-full sm:w-60 md:w-72 flex flex-col p-4 gap-y-1 rounded-md mx-4 sm:mx-0">
              <div className="icon">
                <Image width={40} height={40} src={item.src} className="" alt={item.alt} />
              </div>
              <div className="head">
                <h1 className="font-[500] text-lg text-[#f8f8f8]">{item.name}</h1>
              </div>
              <div className="pra">
                <p className="text-xs text-[#959595]">{item.desc}</p>
              </div>
            </div>
          })}
        </div>
      </div>


      <h1 className="text-center text-4xl bg-[#2e2e2e] font-[600] text-[#f2b713]">My Portfolio</h1>
      <div id="portfolio" className="flex lg:flex-row flex-col w-full bg-[#2e2e2e] px-4 sm:px-6 py-10 sm:py-16 lg:py-10 gap-6">
        <div
          onClick={() => { setMenu(!menu) }}
          className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 border-2 rounded-lg p-6 sm:p-8 lg:p-10 border-black cursor-pointer"
        >
          <Image
            unoptimized
            width={350}
            height={350}
            src={data.src.length == 0 ? video[0].src : data.src}
            alt="ghjg"
            className="rounded-xl border-4 border-[#f2b713] shadow-md w-full sm:w-64 lg:w-[320px] h-auto object-cover"
          />
          <div className="flex flex-col text-[#f8f8f8] text-center sm:text-left">
            <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl mb-2">
              {data.title.length == 0 ? video[0].title : data.title}
            </h2>
            <p className="text-sm sm:text-base opacity-90">
              {data.description.length == 0 ? video[0].description : data.description}
            </p>
          </div>
        </div>

        <div className="flex lg:flex-col flex-row flex-wrap lg:flex-nowrap justify-center lg:justify-start items-start border-2 p-3 rounded-lg border-black gap-3">
          {video.map((item, index) => {
            return (
              <Image
                unoptimized
                key={index}
                width={180}
                height={180}
                onClick={() => { getUrl(item) }}
                src={item.src}
                alt={item.src}
                className={`cursor-pointer ${data.title.length == 0 && item.src == video[0].src ? "border-yellow-500" : ""
                  } ${data.src === item.src ? "border-yellow-500" : ""}
          rounded-lg border-2 transition object-cover
          w-24 sm:w-28 lg:w-36 aspect-square shrink-0 hover:scale-105`}
              />
            );
          })}


          <a
            href="https://drive.google.com/drive/folders/1LblnDvngapJrnMAPGKw96qRbmndKQGO3?usp=sharing"
            target="_blank"
            className="inline-flex items-center justify-center rounded-lg border-2 border-[#f2b713] bg-[#f2b713] hover:bg-[#d9a312] text-[#2e2e2e] font-semibold transition hover:scale-105
                 w-24 sm:w-28 lg:w-36 aspect-square shrink-0 select-none"
          >
            + More
          </a>
        </div>
      </div>





      {
        menu && (
          <div className="fixed inset-0 z-50 flex justify-center items-center bg-black1/2 backdrop-blur-sm">
            <div className="bg-gradient-to-br from-white to-gray-100 w-[95vw] sm:w-[80vw] lg:w-[50vw] h-[85vh] rounded-xl shadow-2xl relative transform transition-all duration-300 scale-100 animate-fadeIn">
              <div className="flex justify-between items-center px-6 py-6">
                <div className="flex items-center justify-center gap-x-3">
                  <Image className="rounded-full" src={'/profile.png'} alt="pro" width={35} height={35} />
                  <h2 className="sm:text-lg text-md font-semibold text-gray-800 text-center">
                    <span className="">Made by </span>
                    <span className="underline underline-offset-2 hover:no-underline cursor-pointer">Talal Ahmad</span>
                  </h2>
                </div>
                <button
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-[#f2b713] text-gray-700 text-xl transition-all cursor-pointer font-bold hover:scale-105"
                  onClick={() => setMenu(!menu)}
                >
                  ✕
                </button>
              </div>

              <div className="bg-gray-700 w-full h-[2px]"></div>

              <div className="h-[70vh] overflow-y-auto scrollbox">
                <div className="px-8 mt-6 text-sm font-semibold text-gray-500">
                  From: {data.date.length == 0 ? video[0].date : data.date}
                </div>

                <div className="flex flex-col gap-y-4 px-8 pb-8 mt-2">
                  <h1 className="text-3xl font-bold text-gray-800">{data.title.length == 0 ? video[0].title : data.title}</h1>
                  <p className="font-semibold text-gray-700">
                    {data.description.length == 0 ? video[0].description : data.description}
                  </p>
                </div>

                <div className="flex flex-col gap-6 justify-items-center p-2 sm:p-8">
                  {data.title.length == 0 ? (
                    video[0].videos.map((item, index) => (
                      <iframe
                        key={index}
                        className="w-full h-[55vh] rounded-xl shadow-lg transition-transform"
                        src={item.url}
                        allow="autoplay"
                      ></iframe>
                    ))
                  ) : (
                    video
                      .filter((items) => items.title === data.title)
                      .flatMap((items) =>
                        items.videos.map((item, index) => (
                          <iframe
                            key={index}
                            className="w-full h-[35vh] sm:h-[40vh] lg:h-[55vh] rounded-xl shadow-lg transition-transform"
                            src={item.url}
                            allow="autoplay"
                          ></iframe>
                        ))
                      )
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      }

      <div className="bg-[#2e2e2e] p-5 contact" id="contact">
        <div className="flex flex-col gap-5 items-center pb-12">
          <h1 className="text-4xl font-bold text-[#f2b713]">Contact Us</h1>

          {/* Form */}
          <div className="flex flex-col gap-3 w-full max-w-md px-4">
            <div className="flex flex-col gap-3 w-full">
              <input
                className="bg-[#2e2e2e] border-2 border-[#f2b713] rounded-md p-2 text-[#f8f8f8] focus:outline-none focus:ring-2 focus:ring-[#959595] focus:border-[#2e2e2e]"
                type="text"
                placeholder="Full name"
              />
              <input
                className="bg-[#2e2e2e] border-2 border-[#f2b713] rounded-md p-2 text-[#f8f8f8] focus:outline-none focus:ring-2 focus:ring-[#959595] focus:border-[#2e2e2e]"
                type="email"
                placeholder="Email"
              />
            </div>
            <textarea
              className="w-full bg-[#2e2e2e] border-2 border-[#f2b713] rounded-md p-2 text-[#f8f8f8] focus:outline-none focus:ring-2 focus:ring-[#959595] focus:border-[#2e2e2e] resize-none"
              rows="4"
              placeholder="Message me"
            ></textarea>

            <button
              type="submit"
              className="bg-[#f2b713] py-2 rounded-md text-xl font-medium text-[#2e2e2e] hover:bg-[#2e2e2e] hover:border-[#f2b713] hover:text-[#f2b713] transition-all duration-300 border-2 border-[#2e2e2e]"
            >
              Submit
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6 justify-center pt-6">
            {/* Upwork (custom SVG) */}
            <a
              href="https://www.upwork.com/freelancers/~017a71a694589d732b?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#f8f8f8] hover:text-[#f2b713] transition-all text-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-current"
              >
                <path d="M18.561 2c-2.975 0-5.439 2.464-5.439 5.438v3.149a14.56 14.56 0 0 1-1.389-3.222c-.15-.456-.295-.92-.418-1.389H8.48v5.427c0 1.242-.906 2.271-2.125 2.42a2.315 2.315 0 0 1-2.607-2.307V5.976H0v5.54c0 3.046 2.474 5.52 5.52 5.52 1.525 0 2.91-.625 3.91-1.635 1.081 1.269 2.383 2.43 3.785 3.494v5.105h2.835v-4.007c.911.3 1.877.48 2.871.48C21.536 20.999 24 18.535 24 15.561c0-2.975-2.464-5.439-5.439-5.439a5.43 5.43 0 0 0-3.437 1.228V7.438c0-1.444 1.175-2.619 2.619-2.619a2.62 2.62 0 0 1 2.62 2.619h2.637C23 4.464 20.536 2 17.561 2Zm-.316 10.74a2.793 2.793 0 0 1 2.799 2.799 2.793 2.793 0 0 1-2.799 2.799 2.793 2.793 0 0 1-2.799-2.799 2.793 2.793 0 0 1 2.799-2.799Z" />
              </svg>
              <span className="hidden sm:inline">Upwork</span>
            </a>

            {/* Email */}
            <a
              href="mailto:talaljalil164@gmail.com"
              className="flex items-center gap-2 text-[#f8f8f8] hover:text-[#f2b713] transition-all text-lg"
            >
              <MdEmail className="text-2xl" />
              <span className="hidden sm:inline">Email</span>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
