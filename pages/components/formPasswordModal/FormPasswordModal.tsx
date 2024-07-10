import React, { useState } from 'react'

const FormPasswordModal = () => {

    const [userPassword, setUserPassword] = useState<string>('')
    console.log(userPassword)
  return (
    <>
    <input placeholder='Write your password' type='password' onChange={(e)=>{setUserPassword(e.target.value)}}></input>
    </>
  )
}

export default FormPasswordModal