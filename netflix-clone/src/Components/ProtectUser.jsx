import React from 'react'
import { Navigate } from 'react-router-dom'
import { AuthUser } from '../Context/AuthContext'

const ProtectUser = ({children}) => {
    const {user}= AuthUser()


    if(user){
        return children
    }else{
        return <Navigate to='/'/>
    }
  
};

export default ProtectUser