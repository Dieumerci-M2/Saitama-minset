import {
  CardBody,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";

import React, { useEffect } from "react";
import imgLog from "../components/img/imgLog.png"
import "./Auth.css"
import Navbar from "./Navbar";
import {useDispatch,useSelector} from 'react-redux'
import { createUsers } from "../feature/usersSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate()
 
  const showToastErrorMessage = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 2000,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  }
  const showToastSuccessMessage = () => {
         toast.success("Merci d'avoir choisi(E) Saitama Mindset 😀 !", {
          position: "top-right",
          autoClose: 2000,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
});
    };
  const [userstate,setUserState] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmPass : ""
  })
   const [userstates,setUserStates] = React.useState("")
  const Dispatch = useDispatch()
  const handleChange = (e) => {
   
    setUserStates(e.target.value)
    setUserState({
      username: e.target.value,
      email: e.target.value,
      password: e.target.value,
      confirmPass : e.target.value
      
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (userstate.username === "" || userstate.email === "" || userstate.password === "" || userstate.confirmPass === "") {
      showToastErrorMessage(`L'un de vos champs n'est pas rempli`)
    }
     if (userstate.username === "" && userstate.email === "" && userstate.password === "" && userstate.confirmPass === "") {
      showToastErrorMessage(`Veuillez remplir tout les champs`)
    }
    if (userstate.password !== userstate.confirmPass) {
      showToastErrorMessage(`Votre mot de passe n'est pas identique, veuilez mettre votre mot de passe`)
    }
    else {
      
        Dispatch(createUsers({
          username: userstate.username,
          email: userstate.email,
          password : userstate.password
        }))
    }
    const auth = localStorage.getItem('users')
    if (auth !== "") {
      showToastSuccessMessage()
      
      navigate('/home')
    } else {
      showToastErrorMessage("veuilles vous authentifiez ")
      
    }
  }
  
  return (
    <body>
      <section>
        <Navbar />
      </section>
      <section className="flex flex-row justify-center items-center text-center mx-auto flex-wrap">
        <div className="imgBackLogin bg-blue-400">
          <p
            className="text-5xl font-bold px-10 pt-20 text-white
           text-center">
            S'Inscrire
          </p>
          <p className="px-10 pt-20  text-white text-center">
            Inscrivez-vous maintenant et joignez le grand Team Saitama !
          </p>
        </div>
        <div className="h-[350px] w-[350px] mb-14">
          <CardBody className="flex flex-col flex-wrap gap-4 w-96 p-10 shadow-xl">
            <Input label="text" size="lg" name="username" onChange={handleChange} />
            <Input label="Email" size="lg" name="email" onChange={handleChange} />
            <Input label="Password" size="lg" name="password" onChange={handleChange} />
            <Input label="Confirm Password" size="lg" />
            <div className="-ml-2.5">
              <Checkbox className="bg-red" label="se souvenir de moi" />
            </div>
            <p className="flex flex-row justify-start text-[gray]">Avez-vous déjà un compte?</p>
            <Button className="bg-red-500" fullWidth onClick={handleSubmit}>
              S'inscrire
            </Button>
          </CardBody>
        </div>
      </section>
    </body>
  );
}