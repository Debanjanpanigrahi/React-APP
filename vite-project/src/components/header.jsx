import React from 'react'
import { FaBars } from "react-icons/fa";
const header = () => {
  return (
    <div className='flex justify-between'>
        <div className='flex items-center justify-center gap-2'>
            <img src="./public/logo.svg" alt="logo" width="20px"/>
            <button>Hoster is hiring</button>
        </div>
        <div>
        <FaBars />
        </div>
    </div>
  )
}

export default header