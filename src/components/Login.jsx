import React from 'react'
import './Auth.css';

function Login() {
  return (
  <body>
    <div className='flex'>
      <div className="flex min-h-full justify-end px-4 sm:px-6 lg:px-8">
        <div className="max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-1xl font-normal tracking-tight text-[gray]">
              VOUS AVEZ DÉJÀ UN COMPTE ? <span className='ml-2 text-[red] cursor-pointer hover:text-indigo-500'> S'inscrire</span>
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Votre adresse mail
                </label>
               <span className='flex flex-start'>Email</span> 
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email"
                />
              </div>
              <br />
              <div>
                <label htmlFor="password" className="sr-only">
                <span>Mot de passe</span>
                </label>
                <span className='flex flex-start'>Mot de passe</span>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Se souvenir de moi
                </label>
              </div>

              <div className="text-sm">
                <span className="font-medium text-[red] cursor-pointer hover:text-indigo-500">
                Mot de passe oublié ?
                </span>
              </div>
            </div>

            <div>
              <button 
                type="submit"
                className="flex bg-[red] group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="flex absolute inset-y-0 left-0 flex items-center pl-3">
                </span>
                S'inscrire
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </body>

  )
}

export default Login