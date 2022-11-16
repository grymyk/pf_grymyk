import React from "react";
import Link from "next/link";
import useSWR from "swr";
import { fetcher } from "../../lib/utils";
import CardListHome from "./CardListHome";

export default function Projects() {
    const { data, error } = useSWR("/api/projects", fetcher)

    if (error) {
        return <div>failed to load</div>
    }

    if (!data) {
        return <div>loading...</div>
    }

    const view_all = `text-gray-500 hover:text-violet-400 font-sans text-2xl
        font-extrabold leading-none hover:underline ml-auto cursor-pointer
        tracking-tight my-2 dark:text-gray-300 dark:hover:text-violet-400
    `

  return (
      <div id="work" className="container px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
            
          <div className="flex items-center flex-wrap text-xl my-3">
            <div className="text-gray-600 font-sans text-2xl font-extrabold leading-none tracking-tight m-2 dark:text-gray-300">
              Featured Projects
            </div>

            <Link href="/projects" >
              <a className = {view_all} >
                View all
              </a>
            </Link>
            
          </div>

          <CardListHome data = { data } />
      </div>
  );
}