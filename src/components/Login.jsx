import {
    CardBody,
    Input,
    Checkbox,
    Button,
  } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

import "./Auth.css"

  export default function Example() {
    const navigateTo = useNavigate();
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
          <div className="h-[350px] w-[350px] mt-[180px]">
            <CardBody className="flex flex-col flex-wrap gap-4 w-96 p-10 shadow-xl">
              <Input label="Email" size="lg" />
              <Input label="Password" size="lg" />
              <div className="-ml-2.5">
                <Checkbox className="bg-red" label="se souvenir de moi" />
              </div>
              <p onClick={()=>navigateTo('/register')} className="flex flex-row justify-center text-blue-400 cursor-pointer">
                Vous n'avez pas un compte?
              </p>
              <Button className="bg-red-700" fullWidth>
                Se connecter
              </Button>
            </CardBody>
          </div>
        </div>
      </body>
    );
  }