import style from '../../styles/pages/pokedex_index.module.scss'
import Layout from '../../components/layouts/layout';
import GridPokemon from '../../components/gridPokemon';

export default function Pokedex() {
  const renderAllGridPokemon = () => {
    let pokemons = [];
    for (let i = 1; i < 807; i++) {
      pokemons.push(<GridPokemon number={i} key={i}/>);
    }
    return pokemons;
  }

  return (
    <Layout>
      {/* <div className={style.container}>
        <div href="#Ability">Ability</div>
        <a href="#Pokedex">Pokédex</a>
        <div href="#Move">Move</div>
      </div> */}
      <div className={style.vertical_container}>
        {renderAllGridPokemon()}
      </div>
      
    </Layout>
  )
}
