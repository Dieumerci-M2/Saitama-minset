import React from 'react'
import CategoriesSearch from '../components/CategoriesSearch'
import ContactForm from '../components/ContactForm'
import Menus from '../components/Menus'

const Contactpage = () => {
  return (
    <div className='m-10'>
      <div className='mb-10'>
       <Menus />
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