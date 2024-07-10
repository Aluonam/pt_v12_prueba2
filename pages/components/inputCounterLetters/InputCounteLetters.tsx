import React, { useState } from 'react'

const InputCounteLetters = () => {
  

    // **2.** Crea un input que permita escribir al usuario y que al pulsar un botón diga cuantas palabras tienen letras pares y cuantas impares.

    const [counterLetters, setCounterLetters] = useState<number>(0)
    const [inputUserSentence, setInputUserSentence] = useState<string>("") //BIEN

    const handleShowResults = () => {
        console.log('el usuario escribe: ', inputUserSentence)
        const userSentence = structuredClone(inputUserSentence)?.split(' ')

        // const numberLetters = userSentence.map((word:string[])=>{
        //     const letters = word.reduce((acc)=>{

        //     })
        //     return letters 
        // })
        // console.log('con split: ', numberLetters)

    }

  return (
    <>
    <div>
        <input placeholder='Write yoour sentence' onChange={(e)=>{setInputUserSentence(e.target.value)}}></input>
        <button onClick={()=>{handleShowResults()}}>Show</button>
    </div>
    </>
  )
}

export default InputCounteLetters