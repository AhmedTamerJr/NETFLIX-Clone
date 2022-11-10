import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import {AuthUser} from "../Context/AuthContext"
import {RiContactsLine} from "react-icons/ri"
import {AiOutlineLogout} from "react-icons/ai"
function Navbar() {
  const {user,logOut}=AuthUser()
 
  const nav=useNavigate()
  // console.log(user)
  const handleLogOut=async()=>{
  try{
    await logOut()
    nav("/login")
  }catch(err){
    console.log(err)
  }
  
  }
  

  
  return (
    <div className='flex items-center justify-between  p-4 z-[100] w-full absolute'>
      {/* <div className='w-[250px] flex justify-between items-center'>
        <p onClick={handleLogOut} className=' text-orange-300 text-3xl font-bold'><AiOutlineLogout/></p>
      <Link to="/">
        <h1 className='text-slate-200 text-4xl font-bold cursor-pointer'>PopCorn</h1>
      </Link>
      </div>  */}
      {user?.email ?  (
        <div className='w-full flex justify-between items-center'>
            <div className='w-[250px] flex justify-between items-center'>
              <p onClick={handleLogOut} className=' text-blue-600 text-3xl font-bold cursor-pointer hover:text-blue-900'><AiOutlineLogout/></p>
              <Link to="/">
                <h1 className='text-blue-600 text-4xl font-bold cursor-pointer'>Po<span className='text-white'>pC</span>orn</h1>
              </Link>
            </div> 
            <div >     
              <Link to="/account">
                <span className='text-blue-600 text-3xl font-bold flex justify-center items-center hover:text-blue-900'><RiContactsLine/></span>
              </Link>
            </div>
        </div>): 
       ( 
       <div className="w-full flex justify-between items-center">
          <Link to="/">
            <h1 className='text-blue-600 text-4xl font-bold cursor-pointer'>Po<span className='text-white'>pC</span>orn</h1>
          </Link>
          <div>
          <Link to="/login">
            <button className='text-white pr-4'>Sign In</button>
          </Link>
          <Link to="signup">
            <button className='bg-blue-500 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
          </Link></div>
        </div>)}
       
    </div>
  )
}

export default Navbar