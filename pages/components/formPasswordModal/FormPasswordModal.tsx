import React, { useState } from 'react'
import ModalAntPassword from './ModalAntPassword'

const FormPasswordModal = () => {

    const [userPassword, setUserPassword] = useState<string>('')

  return (
    <>
    <div>
        <input placeholder='Write your password' type='password' onChange={(e)=>{setUserPassword(e.target.value)}}></input>
        <ModalAntPassword userPassword={userPassword}></ModalAntPassword>
    </div>
    
    </>
  )
}

export default FormPasswordModal