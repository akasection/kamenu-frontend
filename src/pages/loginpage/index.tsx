import React from 'react'

function login() {
  return (
    <section className='bg-gray-100 h-screen'>
        <div className="text-end mr-12 mt-2">
            <a className="hover:underline" href="#">youraccount</a>
        </div>
        <div className="flex flex-col items-center justify-center mx-auto py-7 md:h-screen">
            <a href="#" className="text-3xl mb-4">Kamenu</a>
        <div className="w-full bg-white rounded-lg shadow p-6 space-y-4 sm:max-w-md">
        <form className="space-y-4">
            <div>
                <label className="block mb-2 text-sm font-medium ">E-mail</label>
                <input className="p-2 border-2 bg-gray-50 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 w-full" type="text" placeholder="youremail@gmail.com"/>
            </div>
            <div>
                <label className="block">Password</label>
                <input className="p-2 border-2 bg-gray-50 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 w-full" type="password" placeholder="******"/>
            </div>
        <button className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 " type="submit">Sign in</button>
        <p className="text-sm font-light text-gray-500">Don't have an account yet? <a className="font-medium text-blue-600 hover:underline" href="#">Register</a></p>
        </form>
        </div>
        </div>
    </section>
  )
}

export default login