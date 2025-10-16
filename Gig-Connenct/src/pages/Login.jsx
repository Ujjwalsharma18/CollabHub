import React from 'react'

const Login = ({setShowLogin}) => {
  return (
    <div onClick={()=>setShowLogin(false)} className='fixed top-50 left-0 right-0 z-100 flex justify-center items-center text[font1]'>
      

       <div className=''>
        {/* <Link className='text-[6vw] lg:mt-6' to='/agence'>GetHired</Link> */}
         <form class="mt-8" onsubmit="return false">
        <label for="email" class="block mb-1 font-medium text-slate-300">Email address</label>
        <input type="email" id="email" name="email" placeholder="Email" class="w-full p-2 mb-3 bg-slate-900 border border-slate-700 rounded-md focus:outline-none focus:ring-1 transition focus:ring-indigo-500 focus:border-indigo-500" />

        <label for="password" class="block mb-1 font-medium text-slate-300">Password</label>
        <input type="password" id="password" name="password" placeholder="Password" class="w-full p-2 mb-2 bg-slate-900 border border-slate-700 rounded-md focus:outline-none focus:ring-1 transition focus:ring-indigo-500 focus:border-indigo-500" />
        <div class="text-right">
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot password?</a>
        </div>
        <button type="submit" class="w-full mt-10 px-4 py-2.5 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Sign in</button>
    </form>
        
      </div>
    </div>
  )
}

export default Login
