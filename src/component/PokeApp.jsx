import React from 'react';
import { usePoke } from '../hooks/usePoke';
import { BuscarPoke } from './BuscarPoke';
export const PokeApp = () => {
    const { handlePoke, arreglo} = usePoke()
    return (
        <>
            <BuscarPoke handlePoke={handlePoke}/>
        </>
    )
}
