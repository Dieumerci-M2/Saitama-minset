import React from 'react'
import { useEffect, useRef } from 'react'
const AdminPage = () => {
    const claudinaryRef = useRef();
    useEffect( () => {
        claudinaryRef.current = window.claudinary;
        console.log( claudinaryRef.current );
        console.log(window.claudinary);
    }, [])
  return (
      <div className='flex justify-center items-center text-center mt-[20%]'>
          <button className='text-white bg-red-700 p-2'>Upload Images</button>
    </div>
  )
}

export default AdminPage