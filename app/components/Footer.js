import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


function Footer() {
    const timestamps = Date.now()
    const today = new Date(timestamps)
    const year = today.getFullYear()

    return (
        <footer className="bg-[#282826] flex flex-col sm:flex-row w-full py-2 px-6 justify-between items-center">
            <div className="text-[#959595] text-xs text-center sm:text-sm font-normal">Copyright © {year} by Talal Ahmad | All
                Rights Reserved.</div>
            <a href="#"
                className="hover:bg-[#959595] w-8 h-8 sm:w-9 sm:h-9 mt-2 sm:mt-0 rounded-md flex justify-center items-center cursor-pointer bg-[#f2b713] text-[#282826] transition-all duration-200 hover:text-[#282826]">
                <FaArrowUpLong className="text-base sm:text-lg font-bold" />
            </a>
        </footer>
    )
}

export default Footer
