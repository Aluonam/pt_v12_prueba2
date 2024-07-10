import React, { useState } from 'react'
import ModalAntPassword from './ModalAntPassword'

const FormPasswordModal = () => {

    const [userPassword, setUserPassword] = useState<string>('')
    console.log(userPassword)
  return (
    <>
    <div>
        <input placeholder='Write your password' type='password' onChange={(e)=>{setUserPassword(e.target.value)}}></input>
        <ModalAntPassword></ModalAntPassword>
    </div>
    
    </>
  )
}

export default FormPasswordModal