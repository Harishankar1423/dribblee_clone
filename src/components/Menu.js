import React from 'react'

const Menu = () => {
  return (
    <div className="flex items-center text-[15px] justify-evenly w-full mt-8 text-gray-600">
        <buttion className="border border-gray-400 rounded-md h-6 w-20 text-center">Popular</buttion>
        <div className="w-[800px]">
            <ul className="flex justify-between">
                <li className="hover:text-black curser-pointer hover:font-bold">All</li>
                <li className="hover:text-black curser-pointer hover:font-bold">Animation</li>
                <li className="hover:text-black curser-pointer hover:font-bold">Branding</li>
                <li className="hover:text-black curser-pointer hover:font-bold">Illustration</li>
                <li className="hover:text-black curser-pointer hover:font-bold">Mobile</li>
                <li className="hover:text-black curser-pointer hover:font-bold">Print</li>
                <li className="hover:text-black curser-pointer hover:font-bold">Product Design</li>
                <li className="hover:text-black curser-pointer hover:font-bold">Typography</li>
                <li className="hover:text-black curser-pointer hover:font-bold">Web Design</li>
            </ul>
        </div>
        <button>
            Filters
        </button>
    </div>
  )
}

export default Menu