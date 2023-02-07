import React from 'react'


function Forms() {

  return (


    <div class="block p-6 rounded-lg shadow-lg bg-white">
      <form>
        <div class="grid grid-cols-2 gap-4">
          <div class="form-group mb-6">
            <input type="text" class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
              aria-describedby="prenom" placeholder="Prénom" />
          </div>
          <div class="form-group mb-6">
            <input type="text" class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
              aria-describedby="nom" placeholder="Nom" />
          </div>
          <div class="form-group mb-6">
            <input type="text" class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
              aria-describedby="emailHelp123" placeholder="Email" />
          </div>
          <div class="form-group mb-6">
            <input type="number" class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
              aria-describedby="numerodetelephone" placeholder="Numéro de téléphone" />
          </div>
        </div>
        <div className='mb-5'>
          <span>
            <div class="ml-2 text-sm">
              <p for="helper-radio" className=" mb-5 font-medium text-gray-900 dark:text-gray-300">Selectionner votre sujet</p>
              <span><p id="helper-radio-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">

                <span><label><input id="helper-radio" aria-describedby="helper-radio-text" type="radio" value="" class="w-4 ml-2 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                  <span className='ml-2'>Sujet Général</span>

                </label>

                  <label><input id="helper-radio" aria-describedby="helper-radio-text" type="radio" value="" class="w-4 ml-2 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                    <span className='ml-2'>Contact pour un projet</span>

                  </label>
                  <label><input id="helper-radio" aria-describedby="helper-radio-text" type="radio" value="" class="w-4 ml-2 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                    <span className='ml-2'>S'informer</span>

                  </label>

                  <label><input id="helper-radio" aria-describedby="helper-radio-text" type="radio" value="" class="w-4 ml-2 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                    <span className='ml-2'>Autres</span>

                  </label>
                </span>
              </p>
              </span>
            </div>
          </span>
        </div>
        <div class="form-group mb-6">


          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre message</label>
          <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>



        </div>


        <div className='flex justify-end'>
          <button type="submit" class="
      w-48
      px-6
      py-2.5
      bg-red-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Envoyer le message</button>
        </div>
      </form>
    </div>


  )
}

export default Forms