import React from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'


const NavBar = () => {
    const { theme, setTheme } = useTheme()
    return (
        <div>
            <nav className="bg-white dark:bg-Custom">
                <div className="container px-6 py-3 mx-auto">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <a className="length font-bold text-black transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text- dark:hover:text"
                                    href="/"> <Image className="" width="30rem" height="30rem" src="/../public/favicon.ico" alt="Logo" />
                                    DailyReading</a>
                                {/* <!-- Search input on desktop screen --> */}
                                <div className="hidden mx-10 md:block">
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                        </span>
                                        {/* <!-- <input type="text" name="k" value="" className="w-full py-2 pl-10 pr-4 text-white bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search""> --> */}
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Mobile menu button --> */}
                            <div className="flex md:hidden">

                                {/* <!-- Toggle switch begins --> */}
                                <div className="flex justify-end items-center space-x-2">
                                    <span className="text-sm text-gray-500 dark:text-white">Light</span>
                                    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} for="toggle" className="w-9 h-5 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer duration-300 ease-in-out dark:bg-gray-600">
                                        <div className="toggle-dot bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out dark:translate-x-3"></div>
                                    </button>
                                    <span className="text-sm text-gray-900 dark:text-gray-400">Dark</span>
                                    {/* <input id="toggle" type="checkbox" className="hidden" :value="darkMode" @change="darkMode = !darkMode" /> */}
                                </div>
                                {/* <!-- Toggle switch ends --> */}
                            </div>
                        </div>
                        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
                        <div className="items-center md:flex">
                            <div className="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
                                {/* <!-- Toggle switch begins --> */}
                                <div className="hiddentogglebutton">
                                    <div className="flex justify-end items-center space-x-2">
                                        <span className="text-sm text-gray-600 dark:text-gray-300">Light</span>
                                        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} for="toggle" className="w-9 h-5 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer duration-300 ease-in-out dark:bg-gray-600">
                                            <div className="toggle-dot bg-gray-100 w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out dark:translate-x-3"></div>
                                        </button>
                                        <span className="text-sm text-gray-600 dark:text-gray-300">Dark</span>
                                        {/* <input id="toggle" type="checkbox" className="hidden" :value="darkMode" @change="darkMode = !darkMode" /> */}
                                    </div>
                                </div>
                                {/* <!-- Toggle switch ends --> */}
                                <a className="my-1 text-sm leading-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0"
                                    href="/">Home</a>
                                <a className="my-1 text-sm leading-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0"
                                    href="/#Blog">Blog</a>
                                {/* <!-- <a className="my-1 text-sm leading-5 text-white transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0"
                            href="/">Compoents</a>
                        <a className="my-1 text-sm leading-5 text-white transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0"
                            href="/">Courses</a> --> */}
                            </div>

                            {/* <!-- <div className="flex items-center py-2 -mx-1 md:mx-0">
                            <a className="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-gray-500 rounded-md hover:bg-blue-600 md:mx-2 md:w-auto" href="/">Login</a>
                            <a className="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 md:mx-0 md:w-auto" href="/">Join free</a>
                        </div> --> */}

                            {/* <!-- Search input on mobile screen --> */}
                            <div className="mt-3 md:hidden">
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                        {/* <!-- <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg> --> */}
                                    </span>

                                    {/* <!-- <input  type="text" className="w-full py-2 pl-10 pr-4 text-white bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search"> --> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="py-3 mt-3 -mx-3 overflow-y-auto whitespace-nowrap scroll-hidden">
                        <a className="mx-4 text-sm leading-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
                            href="Tech Blogpost/Tech_Blogpost_main.html/Tech_Blogpost_main">Technology</a>
                        <a className="mx-4 text-sm leading-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
                            href="Availablesoon.html/Availablesoon">Food & Drink</a>
                        <a className="mx-4 text-sm leading-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
                            href="Availablesoon.html/Availablesoon">Health</a>
                        <a className="mx-4 text-sm leading-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
                            href="Availablesoon.html/Availablesoon">Money</a>
                        <a className="mx-4 text-sm leading-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
                            href="Availablesoon.html/Availablesoon">Household</a>
                        <a className="mx-4 text-sm leading-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
                            href="Availablesoon.html/Availablesoon">Parenting</a>
                        <a className="mx-4 text-sm leading-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
                            href="Availablesoon.html/Availablesoon">Work</a>
                        <a className="mx-4 text-sm leading-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
                            href="Availablesoon.html/Availablesoon">Realtionships</a>
                        <a className="mx-4 text-sm leading-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
                            href="Availablesoon.html/Availablesoon">E-Commerce</a>
                        <a className="mx-4 text-sm leading-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
                            href="Availablesoon.html/Availablesoon">Programming</a>
                        <a className="mx-4 text-sm leading-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
                            href="Availablesoon.html/Availablesoon">Marketing</a>
                        <a className="mx-4 text-sm leading-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
                            href="Availablesoon.html/Availablesoon">Freelancing</a>
                        <a className="mx-4 text-sm leading-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
                            href="Availablesoon.html/Availablesoon">Video Editing</a>
                        <a className="mx-4 text-sm leading-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
                            href="Availablesoon.html/Availablesoon">Auto-Mobiles</a>
                        <a className="mx-4 text-sm leading-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
                            href="Availablesoon.html/Availablesoon">Straming Platforms</a>
                        <a className="mx-4 text-sm leading-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
                            href="Availablesoon.html/Availablesoon">Music</a>
                        <a className="mx-4 text-sm leading-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
                            href="Availablesoon.html/Availablesoon">Software</a>
                        <a className="mx-4 text-sm leading-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
                            href="Availablesoon.html/Availablesoon">VS Code</a>
                        <a className="mx-4 text-sm leading-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
                            href="Availablesoon.html/Availablesoon">PHPStorm</a>
                        <a className="mx-4 text-sm leading-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
                            href="Availablesoon.html/Availablesoon">Sublime</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar