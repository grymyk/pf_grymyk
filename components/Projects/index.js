import React from "react";
import Link from "next/link";
import useSWR from "swr";
import axios from 'axios'
import CardListHome from "./CardListHome";

const fetcher = url => axios.get(url).then(res => res.data)

export default function Projects() {
    const { data, error } = useSWR("/api/projects", fetcher)

    if (error) {
        console.log( error )

        return <div>failed to load</div>
    }

    if ( !data ) {
        return <div className = "mt-4 text-center italic">loading...</div>
    }

    const view_all = `text-gray-500 hover:text-cyan-400 text-2xl leading-none hover:underline ml-auto cursor-pointer
        tracking-tight my-2 dark:text-gray-300 dark:hover:text-cyan-400 font-Spartan
    `

    const work_cls = `container px-4 py-4 mx-auto
        sm:max-w-xl
        md:max-w-full
        lg:max-w-screen-xl lg:py-8
    `

  return (
      <div id="work" className = { work_cls }>
            
          <div className="flex items-center flex-wrap text-xl my-3">
            <div className="text-gray-600 text-2xl leading-none tracking-tight m-2 dark:text-gray-300 font-Spartan">
              Featured Projects
            </div>

            <Link href="/projects" >
              <a className = { view_all } >
                View all
              </a>
            </Link>
            
          </div>

          <CardListHome data = { data } />
      </div>
  );
}