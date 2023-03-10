import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { createUsers } from "../feature/usersSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Forms() {
     const navigateTo = useNavigate();
   const dispatch = useDispatch()
  const showToastErrorMessage = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  }
  const showToastSuccessMessage = () => {
         toast.success("Merci d'avoir choisi(e) Saitama Mindset 😀 !", {
          position: "top-right",
          autoClose: 2000,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
});
  navigateTo('/home') 
  };
  const [userName, setUserName] = useState("")
  const [email, setUserEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPass, setConfirmPass] = useState("")

  const handleUsernameChange = (e) => {
    setUserName(e.target.value)
}

    const handleemailChange = (e) => {
    setUserEmail(e.target.value)
} 
  
    const handlepasswordChange = (e) => {
    setPassword(e.target.value)
  } 
      const handleconfirmPassChange = (e) => {
    setConfirmPass(e.target.value)
} 
  
  
 
  const handleSubmit = (e) => {
    e.preventDefault()
    if (password === confirmPass) {
      if (userName !== "" && email !== "") {
        dispatch(createUsers({
          username: userName,
          email: email,
          password :password
        }))
        showToastSuccessMessage()
        

      } else if (userName === "" && email === "") {
               showToastErrorMessage(`Votre champ nom est vide ou votre champ email est vide `)
      }  
    } else if (password !== confirmPass) {
      
       showToastErrorMessage(`Votre mot de passe n'est pas identique, veuilez mettre votre mot de passe`)
    }
  }

  return (


    <div class=" px-10 py-6 shadow-lg bg-white max-mobile:shadow-none max-tablette:shadow-none">
      <form>
        <div class="grid grid-cols-2 gap-4 max-mobile:flex max-mobile:flex-col max-tablette:flex max-tablette:flex-col">
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
              <span><p id="helper-radio-text" className="text-xs font-normal text-gray-500 dark:text-gray-300">

                <span className='flex gap-10 justify-center max-tablette:grid max-tablette:grid-cols-2 max-tablette:gap-4 max-mobile:grid max-mobile:grid-cols-2 max-mobile:gap-4'>
                    <div className='flex gap-2 items-center'>
                      <input id="sujet-general" aria-describedby="helper-radio-text" type="radio" value="Sujet Général" name='radio' class="w-4 ml-2 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label for="sujet-general">Sujet Général</label>
                    </div>

                    <div className='flex gap-2 items-center'>
                      <input id="pour-projet" aria-describedby="helper-radio-text" type="radio" value="" name='radio' className="w-4 ml-2 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label for="pour-projet">Contact pour un projet</label>
                    </div>

                    <div className='flex gap-2 items-center'>
                      <input id="informer" aria-describedby="helper-radio-text" type="radio" value="" name='radio' className="w-4 ml-2 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label for="informer">S'informer</label>
                    </div>

                    <div className='flex gap-2 items-center'>
                      <input id="autres" aria-describedby="helper-radio-text" type="radio" value="" name='radio' class="w-4 ml-2 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label for="autres">Autres</label>
                    </div>
                </span>
              </p>
              </span>
            </div>
          </span>
        </div>
        <div class="form-group mb-6">


          <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre message</label>
          <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>



        </div>


        <div className='flex justify-start'>
          <button type="submit" className="
      w-56
      px-6
      py-2.5
      bg-red-600
      text-white
      font-medium
      text-md
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-red-300 hover:shadow-lg
      focus:bg-red-400 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-red-500 active:shadow-lg
      transition
      duration-150
      ease-in-out"
      onClick={(e)=>handleSubmit(e)}>Envoyer le message</button>
        </div>
      </form>
    </div>


  )
}

export default Forms