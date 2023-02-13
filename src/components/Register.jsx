import {
  CardBody,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import "./Auth.css"
import Navbar from "./Navbar";
import {useDispatch,useSelector} from 'react-redux'
import { createUsers } from "../feature/usersSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate()
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
    };
  const [userstate, setUserState] = useState({
    status: false,
    
  })


  
  const handleChange = (e) => {
    const target = e.target.value
    const name = e.target.name
    setUserState({
      status:true,
      [name] : target
    })
  }
  const handleSubmit = (e) => {
   
    e.preventDefault()
     axios.post('http://localhost:8080/api/v1/register', {
    uername: 'Fred',
        email: 'tone@gmail.com',
    password:"&éérrrrrrrrrrrr"
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
    // if (userstate.username === "" || userstate.email === "" || userstate.password === "" || userstate.confirmPass === "") {
     
    //   showToastErrorMessage(`L'un de vos champs n'est pas rempli`)
   
    // }
    //  if (userstate.username === "" && userstate.email === "" && userstate.password === "" && userstate.confirmPass === "") {
    //   showToastErrorMessage(`Veuillez remplir tout les champs`)
    // }
    // // if (userstate.password !== userstate.confirmPass) {
    //   showToastErrorMessage(`Votre mot de passe n'est pas identique, veuilez mettre votre mot de passe`)
    // }
    // else {
        // dispatch(createUsers({
        //   username: userstate.username,
        //   email: userstate.email,
        //   password : userstate.password
        // }))
     
    // }
    // const auth = localStorage.getItem('users')
    // if (auth) {
    //   showToastSuccessMessage()
      
    //   // navigate('/home')
    // } else {
    //   showToastErrorMessage("veuillez vous authentifiez ")
      
    // }
  }
  
  return (
    <body>
      <section>
        <Navbar />
      </section>
      <section className="flex flex-row justify-center items-center text-center mx-auto">
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
        <form className="h-[350px] w-[350px] mb-14"   >
          <CardBody className="flex flex-col flex-wrap gap-4 w-96 p-10 shadow-xl" >
            <Input value={userstate.username} required type="text"    autoComplete="off" label="Nom" size="lg" name="username" onChange={handleChange} />
            <Input value={userstate.email} required type="email"  autoComplete="off"  label="Email" size="lg" name="email" onChange={handleChange} />
            <Input value={userstate.password} required type="password"  autoComplete="off"  label="Password" size="lg" name="password" onChange={handleChange} />
            <Input value={userstate.confirmPass} required type="password"   autoComplete="off"  label="Confirmez votre Password" name="confirmPass" onChange={handleChange} size="lg" />
            <div className="text-start -ml-2.5">
              <Checkbox className="bg-red" type={userstate.status} onClick={() => {
                setUserState({
                  status: !userstate.status,
                  ...userstate
                })
              }} label="se souvenir de moi" />
            </div>
            <p className="text-center text-blue-400 cursor-pointer">Avez-vous déjà un compte?</p>
            <Button type="submit" onClick={handleSubmit} className="bg-red-500 text-center" fullWidth >
              S'inscrire
            </Button>
          </CardBody>
        </form>
      </section>
      <ToastContainer/>
    </body>
  );
}