import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
  } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import imgLog from "../components/img/imgLog.png"
import "./Auth.css"

  export default function Example() {
    
    return (
        <body>
        <div className="flex flex-row flex-wrap items-center mt-14 ">     
        <div className="imgBackLogin">
        <p className="flex text-5xl font-bold p-10 text-white"> Se connecter </p>
        <p className="p-10 text-white">Connectez-vous et joignez notre team ! C'est gratuit et sans frais...</p>
        </div>
        <div className="flex ml-10 h-[350px] w-[350px]">
     
        <CardBody className="flex flex-col flex-wrap gap-4 w-96 p-10">
        <p className="flex flex-row justify-center text-[gray]">AVEZ-VOUS DÉJÀ UN COMPTE ?</p> 
          <Input label="Email" size="lg" />
          <Input label="Password" size="lg" />
          <div className="-ml-2.5">
            <Checkbox className="bg-red" label="se souvenir de moi" />
          </div>
        
          <Button className="bg-[red]" fullWidth>
            Se connecter
          </Button>
        
        </CardBody>
     
      </div>
      </div>
      </body>
    );
  }