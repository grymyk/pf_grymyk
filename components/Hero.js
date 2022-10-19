import Image from "next/image";

export default function Hero() {
    const resume_btn = `inline-flex text-white font-medium bg-gray-700
        border-0 py-2 px-6 focus:outline-none hover:bg-violet-400
        rounded-md text-lg dark:bg-gray-300 dark:text-black
        dark:hover:bg-violet-400 dark:hover:text-white
    `

    return (
      <section className="text-gray-700 dark:text-gray-300">
        <div className="container mx-auto w-auto flex py-8 px-4 flex-col-reverse items-center md:flex-row ">
          <div className="lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center w-5/6">
            <h1 className="sm:text-4xl text-3xl mb-4 font-bold text-gray-700 dark:text-gray-300">
              Hi, I am Mykola Grytsai, Creative Technologist
            </h1>
            <p className="mb-8 text-2xl leading-relaxed">
              Experienced software engineer with demonstrated ingenuity and creativity and 5+ years of experience as a Front-end
              developer. Having a Master degree in Physics I have an engineering mindset and am passionate about solving analytical
              problems.
            </p>
            <div className="flex justify-center">
              <button className = { resume_btn }>
                Download Resume
              </button>
            </div>
          </div>
          <div className="w-auto md:mb-5">
            <Image
                className = "object-cover object-center rounded z-0"
                alt = "grytsai mykola avatar"
                width = "243"
                height = "243"
                src="/grytsai_mykola.jpg"
            />
          </div>
        </div>
      </section>
    );
}
