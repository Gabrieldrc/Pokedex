import Link from 'next/link';
import PokemonLayout from './pokemonLayout';
import style from '../styles/components/pokemonDetails.module.scss';
import { capitalize } from '../lib/functions';
import { cleanEvolutionData } from '../lib/pokedex.api';
import { useEffect, useState } from 'react';
import EvolutionChain from './evolutionChain';

export default function PokemonDetails({number, pokemonData}) {
  const pokemonName = capitalize(pokemonData.name);
  const [ loadingState, setLoadingState ] = useState(true);
  const [ evolutionChainData, setEvolutionChainData ] = useState({});

  useEffect(() => {
    async function fetchPokemonEvolutionChain () {
      const response = await cleanEvolutionData(pokemonData.evolution_chain_raw);
      setEvolutionChainData(response);
      setLoadingState(false);
    }
    fetchPokemonEvolutionChain();
  },[])

  function rederEvolution(data) {
    console.log(data);
    return <EvolutionChain data={data}/>;
  }
  return(
    <PokemonLayout type={pokemonData.types[0].type.name} name={pokemonName}>
      <Link href="/pokedex">
        <a className={style.buttom}>
          <div className={style.innerCircle}>x</div>
        </a>
      </Link>
      <div className={style.number}>{number}</div>
      {/* <div className={style.numberBG}></div> */}
      <img className={style.img} src={pokemonData.imgUrl} alt={number}/>
      <div className={style.container}>
        <div className={style.mainName}>{pokemonName}</div>
        <div className={style.types}>
          {
            pokemonData.types.map(function (index) {
              const type = index.type.name;
              return <div key={type} className={style.type}>{type}</div>;
            })
          }
        </div>
        <div className={style.mainDetails}>
          <div className={style.grid}>
            <div className={style.value}>
              {number}
            </div>
            <div className={style.key}>
              Id
            </div>
          </div>
          <div className={style.grid}>
            <div className={style.value}>
              {pokemonData.height / 10} <span className={style.unit}>m</span>
            </div>
            <div className={style.key}>
              Height
            </div>
          </div>
          <div className={style.grid}>
            <div className={style.value}>
              {pokemonData.weight / 10} <span className={style.unit}>kg</span>
            </div>
            <div className={style.key}>
              Weight
            </div>
          </div>
        </div>
        <div>
          <div>Evolution</div>
          {
            loadingState ?
             "loading..." 
            : 
            rederEvolution(evolutionChainData)
          }
        </div>
      </div>
    </PokemonLayout>
  )
} 