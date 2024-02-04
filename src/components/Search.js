import React, { useState } from 'react';

const Search = () => {

    const [query, setQuery] = useState("")

    function search(e){
        e.preventDefault()
        setQuery(e.target.value)

    }

    return (
        <div className="w-full max-w-xl flex items-center m-auto text-xl">
            <form>   
                <label for="default-search" class="mb-2 text-sm font-medium text-pink-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="mr-1 w-5 h-5 text-gray-500 dark:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" class="h-full block w-[8cm] p-4 my-1 ps-10 text-3px focus:empty:bg-black-300 rounded-[40px] dark:placeholder-gray-400 text-black" placeholder="Search" required/>
                    <button type="submit" class="text-white absolute end-2.5 bottom-[0.3cm] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline focus:ring-blue-300 font-medium rounded-[40px] text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>
        </div>
    );
};

export default Search;