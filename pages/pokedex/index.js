import style from '../../styles/pages/pokedex_index.module.scss'
import Layout from '../../components/layouts/layout';
import GridPokemon from '../../components/gridPokemon';
import SearchEngine from '../../components/searchEngine';

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
      <div className={style.container}>
        <SearchEngine />
        {renderAllGridPokemon()}
      </div>
      
    </Layout>
  )
}
