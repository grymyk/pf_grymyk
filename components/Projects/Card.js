import Image from "next/image"

const Tool = function Tool({ tool }) {
    return (
        <span className="bg-gray-500 rounded-md px-2 mr-2">
          { tool }
        </span>
    )
}

export default function Card({link, imgUrl, title, description, tools }) {

    const toolList = tools.map( (tool, index) => {
      return <Tool key = { index } tool = {tool} />
    })
    
    return (
      <a href = {link} className="w-full block group backdrop-blur-[10px]">
        <div className="relative overflow-hidden">
          
          <div className="h-72 object-cover relative">
            <Image
                src = { imgUrl }
                alt = { title }
                className="transform object-cover h-full w-full"
                width = { 352 } 
                height = { 288 }
            />
            <div className="bg-black object-cover h-full w-full absolute top-0 opacity-0 group-hover:opacity-40"></div>
          </div>

          <div className="text-white absolute bottom-6 left-6 translate-y-[150px] ease-in-out duration-300 opacity-1 group-hover:translate-y-0 group-hover:opacity-100">
            <h3 className="font-Spartan text-xl rounded-md">
                { title }
            </h3>
            <div className="mt-2">
                { description }
            </div>
            <div className="flex items-center justify-start text-sm mt-2">
                { toolList }
            </div>
          </div>
        </div>
      </a>
    );
  };