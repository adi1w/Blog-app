import React from 'react'
import Link from "./Components/Link";
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const Navi = useNavigate()
  return (
    <>
        <div className="app__main">
      
      <div onClick={()=>Navi('/')} className="Title">
        </div>
      
        <Link/>
        </div><hr/>
      
       
    </>
  )
}

export default Header