import React, { useState } from 'react'

const InputCounteLetters = () => {

    // **2.** Crea un input que permita escribir al usuario y que al pulsar un botón diga cuantas palabras tienen letras pares y cuantas impares.

    const [counterLetters, setCounterLetters] = useState<number>(0)
    const [inputUserSentence, setInputUserSentence] = useState<string>("") //BIEN

    const handleShowResults = () => {
        console.log('el usuario escribe: ', inputUserSentence)
        //si tienes que contar cuantas letras hay... por que no reemplazas los espacios por nada es decir:
        //hola mundo --> holamundo (con un replace())
        //luego haces un split("") y asi tienes todas las letras sin espacios
        // y por ultimo un reduce que vaya cotando las letras :) y con .length? de cada palabra pero sumar po rque?
        // no entiendo lo de sumar todo junto
        //tambien es buena idea sacar un length y sumarlo pero el primer map entonces un redyc
        const userSentence = structuredClone(inputUserSentence)?.split(' ')

        const explicacionNovio = userSentence.reduce((acc,act)=>{
            const wordLength = act.length
            return acc + wordLength
        },0)

        console.log("ejemplo de novio",explicacionNovio)


        const numberLetters = userSentence.map((word:string)=>{
            const letters = word.split('').map(()=>{
                setCounterLetters(counterLetters+1)
                return counterLetters
            })
            return letters 
        })
        console.log('con split: ', numberLetters)

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