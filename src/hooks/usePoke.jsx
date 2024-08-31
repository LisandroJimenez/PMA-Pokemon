import { useState } from 'react'
import { reqPoke } from '../service/poke'

export const usePoke = () => {
    const [arreglo, setArreglo] = useState([])

    const handlePoke = async (categoria, e) => {
        e.preventDefault()
        try {
            const data = await reqPoke(categoria)
            setArreglo(data)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    return {
        handlePoke,
        arreglo,
    }
}
