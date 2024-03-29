import React from 'react'

function NavBar() {
  return (
   <>
<nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://www.logoai.com/img/logo/2-white.png" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">AI HUB</span>
        </a>
       
    </div>
</nav>
<nav className="bg-gray-50 dark:bg-gray-700">
    <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                <li>
                    <a href="/" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="/create" className="text-gray-900 dark:text-white hover:underline">Create Model</a>
                </li>
            
                <li>
                    <a href="/favourite" className="text-gray-900 dark:text-white hover:underline">Favourite Models</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

   
   </>
  )
}

export default NavBar