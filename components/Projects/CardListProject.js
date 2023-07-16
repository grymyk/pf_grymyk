import { useState } from 'react';
import Card from './Card'
import FilterButton from './FilterButton.js';

const FILTER_MAP = {
  All: () => true,
  Software: (card) => card.category === 'software',
  Architecture: (card) => card.category === 'architecture'
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

export default function WorkCardListProject({ data }) {
    const [filter, setFilter] = useState('All')

    const filterList = FILTER_NAMES.map( (name) => (
      <FilterButton
        key = { name }
        name = { name}
        isPressed = { name === filter }
        setFilter = { setFilter }
      />
    ));

    return (
        <div>
      
            <div className="text-gray-500 font-sans text-4xl font-extrabold leading-none tracking-tight my-3 dark:text-gray-300 font-Spartan">
              Projects
            </div>

            <div className="flex items-center justify-center px-5 pt-7">
                { filterList }
            </div>

            {<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-7 pb-40">
              {data 
                && data
                    .filter(FILTER_MAP[filter])
                    .map(({ tools, id, link, imgUrl, title, description }) => (
                      <Card
                          tools = { tools }
                          key = { id }
                          link = { link }
                          imgUrl = { imgUrl }
                          title = { title }
                          description = { description }
                      />
                  ))}
            </div>}
      </div>
    )
}