import React from 'react'
export const reqPoke = async(categoria) => {
    try {

        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${categoria}/`)
        const data = await resp.json()
        
        console.log(data.sprites.other['official-artwork'].front_default)
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}
