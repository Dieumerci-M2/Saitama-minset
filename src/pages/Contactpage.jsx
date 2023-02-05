import React from 'react'
import CategoriesSearch from '../components/CategoriesSearch'
import ContactForm from '../components/ContactForm'
import Rechercher from '../components/Rechercher'


const Contactpage = () => {
  return (
    <div className='m-20'>
      <div className='mb-10'>
       <Rechercher />
      </div>
      <div>
        <CategoriesSearch />
      </div>
      <div >
        <ContactForm />
      </div>

    </div>
  )
}

export default Contactpage