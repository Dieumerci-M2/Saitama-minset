import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import React, { useEffect } from "react";
import imgLog from "../components/img/imgLog.png"
import "./Auth.css"
import Navbar from "./Navbar";
import Footer from "./Footer";
import {useDispatch,useSelector} from 'react-redux'
import { createUsers } from "../feature/usersSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
 
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
    } else {
      showToastErrorMessage("veuilles vous authentifiez ")
      
    }
  }
  
  return (
      <body>
        <div>
          <Navbar />
        </div>
      <div className="flex flex-row justify-center flex-wrap mt-14 ">     
      <div className="imgBackLogin">
      <p className="flex text-5xl font-bold p-10 text-white"> S'Inscrire </p>
      <p className="p-10 text-white">Inscrivez-vous maintenant et joignez le grand Team Saitama !</p>
      </div>
      <div className="flex ml-10 h-[350px] w-[350px]">
   
      <CardBody className="flex flex-col flex-wrap gap-4 w-96 p-10">
      <p className="flex flex-row justify-center text-[gray]">AVEZ-VOUS DÉJÀ UN COMPTE ?</p> 
            <Input label="Nom" size="lg" name="username" required onChange={handleChange} />
              <Input label="Email" size="lg"  name="email" required onChange={handleChange}/>
            <Input label="Password" size="lg"  name="password" required onChange={handleChange}/>
            <Input label="Confirmez votre Password" size="lg" required name="confirmPassword" />
        <div className="-ml-2.5">
          <Checkbox className="bg-red" label="se souvenir de moi" />
        </div>
      
        <Button className="bg-[red]" fullWidth onClick={handleSubmit}>
          S'inscrire
        </Button>
        <ToastContainer/>
      </CardBody>
   
    </div>
    </div>
    <div className="mt-14">
    <Footer />
      </div>
    
    </body>
  );
}