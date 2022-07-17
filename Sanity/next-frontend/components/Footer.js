import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="p-4 bg-white dark:bg-Custom md:flex md:items-center md:justify-between md:p-6">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022
                    <a href="/" className="hover:underline">DailyReading™</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="/" className="mr-4 hover:underline md:mr-6 ">Home</a>
                    </li>
                    <li>
                        <a href="/#Blog" className="mr-4 hover:underline md:mr-6">Blog</a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer