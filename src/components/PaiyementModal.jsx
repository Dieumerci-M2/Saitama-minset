import React,{useState} from 'react'
import { Button } from '@material-tailwind/react';
import axios from 'axios';

const PaiyementModal = ({ Visible, Desciption, Prix, onClose }) => {
  const [stateItem,setStateItem] = useState("")
  const items = {
    Prix: 10,
    Description : "il s'agit d'un livre publié par MOHAMED qui parle de cryptomonaie qui defini ses principes"
    
  }
    
  const handleChangeBitcoin = (e) => {
    setStateItem(e.target.value)
  }
  const handleBitcoinClick =  () => {      
    axios.post('http://localhost:8080/api/v1/btn', {
          description: items.Description,
        email: stateItem,
        amount: items.Prix
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });  
    
  }
    const handleTronClick =  () => {      
    axios.post('https://api.trongrid.io/wallet/createtransaction', {
          owner_address: "41dc8e2c47df5666a9f3cd50c1121b78e15c3f587d",
          to_address: "41ed2642305ac586569176d0507cc94525127b48d2",
          amount: 1
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });  
    
  }
  
  
  
  
    if ( !Visible ) return null;
    
  return (
    <article
      className="fixed inset-0 bg-black
       bg-opacity-30 backdrop-blur-sm flex flex-col justify-center items-center">
      <main className="bg-white w-[400px] h-[500px] rounded-lg p-10">
        <section>
          <div className="w-[300px] h-[120px]">Description : {items.Description}</div>
          <div className="my-8">Prix : {items.Prix
          }</div>
        </section>
        <section className="flex flex-col gap-4">
          <input
            type="text"
            name="cles"
            className="w-[300px] outline-none bg-slate-200 py-2 px-4 rounded-md"
            placeholder="Entrer votre email"
            onChange={handleChangeBitcoin}
            
          />
          <input
            type="text"
            name="cles"
            className="w-[300px] outline-none bg-slate-200 py-2 px-4 rounded-md"
            placeholder="Entrez votre adresse Bitcoin/TRON"
            onChange={handleChangeBitcoin}
          />
        </section>
        <section className="mt-8">
          <span>Choisissez votre mode de paiement</span>
          <div className="text-center mt-4 flex flex-row justify-between">
            <button type='submit' onClick={() => {
              handleBitcoinClick()
              onClose()
            }}  variant="filled" className="w-[100px] bg-[#1E7DBD]">
              Bitcoin
            </button>
            <Button onClick={() => {
              handleTronClick(),
                onClose()
            }} variant="filled" className="w-[100px] bg-[#1E7DBD]">
              TRON
            </Button>
          </div>
        </section>
      </main>
    </article>
  );
};

export default PaiyementModal