import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import imgLog from "../components/img/imgLog.png"
import "./Auth.css"
import Navbar from "./Navbar";
import Footer from "./Footer";
import {useDispatch,useSelector} from 'react-redux'

export default function Register() {
  const Dispatch = useDispatch()
  const state = useSelector(state => {
    return state
  })
  const handleChange = () => {
    
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    
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
            <Input label="text" size="lg" name="username" onChange={handleChange} />
              <Input label="Email" size="lg"  name="email" onChange={handleChange}/>
            <Input label="Password" size="lg"  name="password" onChange={handleChange}/>
            <Input label="Password" size="lg" />
        <div className="-ml-2.5">
          <Checkbox className="bg-red" label="se souvenir de moi" />
        </div>
      
        <Button className="bg-[red]" fullWidth onClick={handleSubmit}>
          S'inscrire
        </Button>
      
      </CardBody>
   
    </div>
    </div>
    <div className="mt-14">
    <Footer />
    </div>
    </body>
  );
}