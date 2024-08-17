import React, { useState } from 'react'

const InputCounteLetters = () => {
  

    // **2.** Crea un input que permita escribir al usuario y que al pulsar un botón diga cuantas palabras tienen letras pares y cuantas impares.

    const [inputUserSentence, setInputUserSentence] = useState<string>("") //BIEN
    const [wordType, setParImpar] = useState({
        par :0,
        impar:0,
    })

    // const handleShowResults = () => {
    //     console.log('el usuario escribe: ', inputUserSentence)
    //     const userSentence = structuredClone(inputUserSentence)?.split(' ');
    //     setParImpar({par:0, impar:0})
    //     userSentence.map((word:string)=>{
    //         if(word.length % 2 === 0) { 
    //             console.log('Es PAR')
    //             setParImpar({...wordType, par: wordType.par + 1})
    //         }else{
    //             console.log('Es IMPAR')
    //             setParImpar({...wordType, impar: wordType.impar + 1})
    //         }
            
    //     })
        
    // }

  return (
    <>
    <div>
        <input placeholder='Write yoour sentence' onChange={(e)=>{setInputUserSentence(e.target.value)}}></input>
        {/* <button onClick={()=>{handleShowResults()}}>Show</button> */}
        <br></br>
        {/* {wordType.par}
        {wordType.impar} */}
    </div>
    </>
  )
}

export default InputCounteLetters