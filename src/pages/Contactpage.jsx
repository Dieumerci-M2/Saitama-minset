import React from 'react'
import CategoriesSearch from '../components/CategoriesSearch'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Menus from '../components/Menus'
import InfoLivre from '../components/InfoLivre'

const Contactpage = () => {
  return (
    <div>
      <div className='mb-10'>
       <Menus />
      </div>
      <div>
        <CategoriesSearch />
       
      </div>
      <div className='flex justify-center'>
        <ContactForm />
      </div>
      <div className='w-full mt-20'>
      <Footer />
      </div>

    </div>
  )
}

export default Contactpage