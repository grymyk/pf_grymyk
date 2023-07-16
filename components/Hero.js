import Image from "next/image";
import Link from "next/link"

export default function Hero() {
    const resume_btn = `inline-flex text-white font-medium bg-gray-700
        border-0 py-2 px-6 focus:outline-none hover:bg-cyan-500
        rounded-md text-lg dark:bg-gray-300 dark:text-black
        dark:hover:bg-cyan-500 dark:hover:text-white
    `

    const cv_url = `https://drive.google.com/file/d/1-sq4lhameMuZwPnHc424a-8f42XnQcB0/view?usp=share_link`

    return (
      <section className="text-gray-700 dark:text-gray-300">
        <div className="container mx-auto w-auto flex py-8 px-4 flex-col-reverse items-center md:flex-row ">
          <div className="font-Spartan lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center w-5/6">
            <h1 className="sm:text-4xl text-3xl mb-4 font-bold text-gray-700 dark:text-gray-300">
              Hi, I am Mykola Grytsai, Creative Technologist
            </h1>
            <p className="mb-8 text-2xl leading-relaxed">
              Experienced software engineer with demonstrated ingenuity and creativity and 5+ years of experience as a Frontend
              developer. Having a Specialist degree in Physics I have an engineering mindset and am passionate about solving analytical
              problems.
            </p>
            <div className="flex justify-center">
              <Link href = { cv_url }>

                  <a className = { resume_btn }
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Go to Resumé Page"
                  >Download Resume</a>
                </Link>
            </div>
          </div>
          <div className="w-auto md:mb-5">
            <Image
                className = "object-cover object-center rounded z-0"
                alt = "Mykola Grytsai avatar"
                width = "243"
                height = "243"
                src="/mykola_grytsai.jpg"
            />
          </div>
        </div>
      </section>
    );
}
