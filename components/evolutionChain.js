import { useEffect, useState } from 'react';
import { basicPokemonData } from '../lib/pokedex.api';

import style from '../styles/components/evolutionChain.module.scss';

export default function EvolutionChain({ data }) {
  const [ pokemonsData, setPokemonsData ] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let dataList = [];
      const enterTheListAndDoTheSame = (list) => {
        list.forEach(async (element) => {
          if (typeof element === 'string') {
            dataList.push(await basicPokemonData(element));
          } else if (typeof element === "object") {
            enterTheListAndDoTheSame(element);
          }
        });
      };
      await enterTheListAndDoTheSame(data);
      setPokemonsData(dataList);
    };
    fetchData();
  },[]);

  function renderEvolution(evolutionList, pokemonsDetails) {
    console.log(evolutionList["0"].name)
    const index = pokemonsDetails.findIndex(element => {
      return element.name === "squirtle";
    });
    if (evolutionList.length === 1) {
      return "oh no!";
    }
    return pokemonComponent(evolutionList[0], "Base", index);
  }

  function pokemonComponent(name, fase, details) {
    console.log(details)
    return (
      <div className={style[`pokemon${fase}`]} key={`${name}_cmp`}>
        {/* <img src={pokemon.imgUrl} alt={`${name}_ev`}/> */}
        <h2>{name}</h2>
      </div>
    );
  }
  // console.log(data);
  // console.log(pokemonsData);
  return (
    <div className={style.container}>
      {pokemonsData.length === "0" ? (
        <div style={{color: "blue"}}>
          cargando
        </div>
        ) : (
          renderEvolution(data, pokemonsData)
        )
      }
    </div>
  );
}