import {
  CardBody,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import "./Auth.css"
import Navbar from "./Navbar";
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