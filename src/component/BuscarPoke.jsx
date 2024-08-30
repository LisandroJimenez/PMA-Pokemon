import React from 'react'
import { useState } from 'react'

export const BuscarPoke = ({handlePoke}) => {
    const [categoria, setCategoria] = useState('')
    return(
        <>
            <div className='container d-flex flex-row justify-content-center alig-items-center mt-3 w-50'>

                <form className='d-flex' onSubmit={(e) => {handlePoke(categoria, e)}} >
                    <input type='text' className='form-control me-2' onChange={(e)=>{setCategoria(e.target.value)}} />
                    <input type='submit' className='btn btn-outline-success' value='Buscar Gif' />
                </form>

            </div>

        </>
    )
}
