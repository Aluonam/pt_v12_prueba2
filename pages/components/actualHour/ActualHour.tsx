import React, { useEffect, useState } from 'react'

const ActualHour = () => {

    const [clock, setClock] = useState<string>('')

    useEffect(() => {
     const interval = setInterval(()=>{
        const date = new Date();
        const hour = date.toLocaleString().split(' ')[1]
        setClock(hour)
     }, 1000)

     return () => clearInterval(interval);

    }, [])


  return (
    <div>
        <b>Actual hour: </b>
        {clock}
    </div>
  )
}

export default ActualHour