import {
    CardBody,
    Input,
    Checkbox,
    Button,
  } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'
import { createUserLogin, createUsers } from "../feature/usersSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./Auth.css"
import { useState } from "react";
import axios from "axios";
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "./firebase";

  export default function Example() {
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
         toast.success("Bon retour chez nous  😀 !", {
          position: "top-right",
          autoClose: 2000,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
});
  navigateTo('/home') 
  };

  const [email, setUserEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

    const handleemailChange = (e) => {
    setUserEmail(e.target.value)
} 
  
    const handlepasswordChange = (e) => {
    setPassword(e.target.value)
  } 

  const login = async() => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
        localStorage.setItem('username', res.user.username);
        localStorage.setItem('user', res.user)
      })
      .catch(err => {
        setError(err.message)
        console.log(error);
      })
  }
 
  const handleSubmit = (e) => {
    e.preventDefault()
    if (password ) {
      if (password !== "" && email !== "") {
        dispatch(createUserLogin({
          email: email,
          password :password
        }))
        login();
        showToastSuccessMessage()
      } else if (password === "" && email === "") {
               showToastErrorMessage(`Votre champ nom est vide ou votre champ email est vide `)
      }  
    } 
  }
    return (
      <body clasName="flex flex-row justify-center items-center text-center mx-auto">
        <div className="flex flex-row flex-wrap items-center">
          <div className="imgBackLogin bg-blue-400 max-mobile:bg-white max-mobile:h-7 max-mobile:mb-[30px] max-mobile:mt-[-30px] max-tablette:bg-white max-tablette:h-7 max-tablette:mb-[30px] max-tablette:mt-[-30px]">
            <p
              className="text-5xl font-bold px-10 pt-20 text-white
           text-center max-mobile:text-red-700 max-mobile:text-lg max-mobile:pb-2 max-tablette:text-lg">
              Se connecter
            </p>
            <p className="px-10 pt-20  text-white text-center max-mobile:hidden max-tablette:hidden">
              Connectez-vous et joignez notre team ! C'est gratuit et sans frais...
            </p>
          </div>
          <ToastContainer/>
          <div className="h-[400px] w-[350px] max-mobile:w-full max-mobile:h-full max-mobile:mt-16 max-tablette:w-full max-tablette:mt-16">
            <CardBody className="cardBody flex flex-col justify-center gap-4 w-96 h-[450px] mt-[5px] p-10 shadow-xl max-mobile:w-full max-mobile:h-full max-mobile:gap-9 max-tablette:w-full max-tablette:gap-9 max-mobile:shadow-none">
              <Input placeholder="Email" id="email" type="email"  value={email} size="lg" onChange={handleemailChange}/>
              <Input placeholder="Password" value={password} type="password" size="lg" onChange={handlepasswordChange}  />
              <div className=" flex items-center -ml-2.5 max-mobile:hidden max-tablette:hidden">
                <Checkbox className="bg-red" id="login-checkbox"/>
                <label for="login-checkbox">se souvenir de moi</label>
              </div>
              <p onClick={()=>navigateTo('/register')} className="flex flex-row justify-center text-blue-400 cursor-pointer">
                Vous n'avez pas un compte?
              </p>
              <Button className="bg-red-700" fullWidth onClick={(e) => {
                handleSubmit(e)
              }}>
                Se connecter
              </Button>
            </CardBody>
          </div>
        </div>
      </body>
    );
  }