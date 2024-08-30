import { useState } from 'react'
import { reqPoke } from '../service/poke'

export const usePoke = () => {
    const [arreglo, setArreglo] = useState([])
    const handlePoke = async (categoria, e) =>{
        e.preventDefault()
        await reqPoke(categoria).then((arreglo)=>{
            setArreglo(arreglo)
        })
    }


    return {
        handlePoke,
        arreglo
    }
}
