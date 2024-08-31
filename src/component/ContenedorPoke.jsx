import React from 'react'

export const ContenedorPoke = ({ arreglo }) => {
  const pokemons = Array.isArray(arreglo) ? arreglo : []

  return (
    <div className="d-flex flex-wrap gap-2 mt-4">
      {pokemons.map((pokemon, index) => (
        <div key={index} className="card" style={{ width: '18rem' }}>
          <img
            src={pokemon.sprites?.other['official-artwork'].front_default}
            className="card-img-top"
            alt={pokemon.name}
          />
          <div className="card-body">
            <h5 className="card-title">{pokemon.name}</h5>
            <p className="card-text">
              <strong>Tipos:</strong> {pokemon.types?.map(type => type.type.name).join(', ')}
              <br />
              <strong>Habilidades:</strong> {pokemon.abilities?.map(ability => ability.ability.name).join(', ')}
              <br />
              <strong>Height:</strong> {pokemon.height / 10} meters
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
