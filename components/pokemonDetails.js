import Link from 'next/link';
import PokemonLayout from './pokemonLayout';
import style from '../styles/components/pokemonDetails.module.scss';
import { capitalize } from '../lib/functions';
import { cleanEvolutionData } from '../lib/pokedex.api';
import { useEffect, useState } from 'react';

export default function PokemonDetails({number, pokemonData}) {
  const pokemonName = capitalize(pokemonData.name);
  const [ loadingState, setLoadingState ] = useState(true);
  const [ evolutionChainData, setEvolutionChainData ] = useState({});

  useEffect(() => {
    async function fetchPokemonEvolutionChain () {
      const response = await cleanEvolutionData(pokemonData.evolution_chain_raw);
      console.log(response);
      setEvolutionChainData(response);
      setLoadingState(false);
    }
    fetchPokemonEvolutionChain();
  },[])

  function displayEvolutionChain() {
    // let base;
    // let evolutionChainComplete = [];
    // let singleEvolutionChain = [];
    // evolutionChainData.forEach(element => {
    //   // console.log(element);
    //   // console.log(typeof element);
    //   if (element.id) {
    //     console.log("primer pokemon")
    //     console.log(element.name)
    //     singleEvolutionChain.push(
    //       <div>
    //         <img src={element.imgUrl} alt={`${element.name}_evl`}/>
    //         <h3>{element.name}</h3>
    //       </div>
    //     );
    //   } else {
    //     console.log(element)
    //     element.forEach(element2 => {
    //       if (element2.id) {
    //         console.log(element2.name)
    //         singleEvolutionChain.push(
    //           <div>
    //             <img src={element2.imgUrl} alt={`${element2.name}_evl`}/>
    //             <h3>{element2.name}</h3>
    //           </div>
    //         );
    //       } else {
    //         element2.forEach(element3 => {
    //           if (element3.id) {
    //             console.log("tercer pokemon")
    //             console.log(element.name)
    //             singleEvolutionChain.push(
    //               <div style={{display: "flex", flexDirection: "row"}}>
    //                 <img src={element3.imgUrl} alt={`${element3.name}_evl`}/>
    //                 <h3>{element3.name}</h3>
    //               </div>
    //             );
    //           }
    //         })
    //       }
    //     })
    //   }
    //   evolutionChainComplete.push(singleEvolutionChain);
    //   singleEvolutionChain = [];
    // });
    
    return <div>
      {"evolutionChainComplete"}
    </div>;
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
              displayEvolutionChain()
              
          }
        </div>
      </div>
    </PokemonLayout>
  )
} 