import React,{useState} from 'react'
import { Button } from '@material-tailwind/react';
import axios from 'axios';

const PaiyementTronModal = ({ Visible, Desciption, Prix, onClose }) => {
	const [stateItem, setStateItem] = useState("")
	const [stateItemprivatekey,setStateItemprivatekey] = useState("")    	
	  const handleChangeTronEmail = (e) => {
    setStateItem(e.target.value)
	  }
	
	  const handleChangeTronPrivatekey = (e) => {
    setStateItemprivatekey(e.target.value)
	  }
    const handleTronClick =  () => {     
      
      const options = {
  method: 'POST',
  url: 'https://api.shasta.trongrid.io/wallet/easytransferbyprivate',
  headers: {accept: 'application/json', 'content-type': 'application/json'},
  data: {privateKey: `${stateItemprivatekey}`, toAddress: `41dc8e2c47df5666a9f3cd50c1121b78e15c3f587d`, amount: 0}
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
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
            type="email"
            name="cles"
            className="w-[300px] outline-none bg-slate-200 py-2 px-4 rounded-md"
            placeholder="Entrer votre email"
					  onChange={handleChangeTronEmail}
					  value={stateItem}
            
          />
          <input
            type="text"
					  name="cles"
					  value={stateItemprivatekey}
            className="w-[300px] outline-none bg-slate-200 py-2 px-4 rounded-md"
            placeholder="Entrez votre adresse Privé de tron pour faire le transfert"
            onChange={handleChangeTronPrivatekey}
				  />

        </section>
        <section className="mt-8">
          <span>Veuillez proceder par ce paiement tron</span>
          <div className="text-center mt-4 flex flex-row justify-between">
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

export default PaiyementTronModal