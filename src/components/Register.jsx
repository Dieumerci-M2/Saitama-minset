import {
  CardBody,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import "./Auth.css"
import Navbar from "./Navbar";
import {useDispatch,useSelector} from 'react-redux'
import { createUsers } from "../feature/usersSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

export default function Register() {
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
    <body>
      <section>
        <Navbar />
      </section>
      <section className="flex flex-row justify-center items-center text-center mx-auto max-mobile:flex-col">
        <div className="imgBackLogin bg-blue-400 max-mobile:bg-white max-mobile:h-[10px] max-mobile:mb-[100px] max-mobile:mt-[-30px]">
          <p
            className="text-5xl font-bold px-10 pt-20 text-white
           text-center max-mobile:text-lg max-mobile:text-red-700">
            S'Inscrire
          </p>
          <p className="px-10 pt-20  text-white text-center max-mobile:hidden">
            Inscrivez-vous maintenant et joignez le grand Team Saitama !
          </p>
        </div>
        <form className="h-[350px] w-[350px] mb-14 max-mobile:w-full"   >
          <CardBody className="flex flex-col flex-wrap gap-4 w-96 p-10 shadow-xl max-mobile:w-full max-mobile:gap-9" >
            <Input value={userName}  type="text"  required   autoComplete="off" label="Nom" size="lg" name="username" onChange={handleUsernameChange} />
            <Input value={email}  type="email" required autoComplete="off"  label="Email" size="lg" name="email" onChange={handleemailChange} />
            <Input value={password}  type="password" required  autoComplete="off"  label="Password" size="lg" name="password" onChange={handlepasswordChange} />
            <Input value={confirmPass}  type="password" required  autoComplete="off"  label="Confirmez votre Password" name="confirmPass" onChange={handleconfirmPassChange} size="lg" />
            <div className="text-start -ml-2.5 max-mobile:hidden">
              <Checkbox className="bg-red" 
              label="se souvenir de moi" />
            </div>
            <p className="text-center text-blue-400 cursor-pointer">Avez-vous déjà un compte?</p>
            <Button type="submit" onClick={(e) => {
              handleSubmit(e)
            }} className="bg-red-500 text-center" fullWidth >
              S'inscrire
            </Button>
          </CardBody>
        </form>
      </section>
      <ToastContainer/>
    </body>
  );
}