import React from 'react'
import { FaSpinner } from "react-icons/fa";

export default function Loader() {
  return (
    <div className='w-screen h-screen z-50 bg-white text-white absolute left-0 top-0 flex justify-center items-center'>
        <div className="w-28">
          <img src="/Handy-Icon.gif"/>
        </div>
    </div>
  )
}
