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
import { useState } from "react";
import "./Auth.css"
import { useState } from "react";

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

    const handleemailChange = (e) => {
    setUserEmail(e.target.value)
} 
  
    const handlepasswordChange = (e) => {
    setPassword(e.target.value)
  } 
     
  
  
 
  const handleSubmit = (e) => {
    e.preventDefault()
    if (password ) {
      if (password !== "" && email !== "") {
        dispatch(createUserLogin({
          email: email,
          password :password
        }))
        showToastSuccessMessage()

      } else if (password === "" && email === "") {
               showToastErrorMessage(`Votre champ nom est vide ou votre champ email est vide `)
      }  
    } 
  }
    return (
      <body clasName="flex flex-row justify-center items-center text-center mx-auto">
        <div className="flex flex-row flex-wrap items-center ">
          <div className="imgBackLogin bg-blue-400">
            <p
              className="text-5xl font-bold px-10 pt-20 text-white
           text-center">
              Se connecter
            </p>
            <p className="px-10 pt-20  text-white text-center">
              Connectez-vous et joignez notre team ! C'est gratuit et sans frais...
            </p>
          </div>
          <ToastContainer/>
          <div className="h-[350px] w-[350px] mt-[180px]">
            <CardBody className="flex flex-col flex-wrap gap-4 w-96 p-10 shadow-xl">
              <Input label="Email"  value={email} required size="lg" onChange={handleemailChange}  />
              <Input label="Password" value={password}  required size="lg" onChange={handlepasswordChange}  />
              <div className="-ml-2.5">
                <Checkbox className="bg-red" label="se souvenir de moi" />
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