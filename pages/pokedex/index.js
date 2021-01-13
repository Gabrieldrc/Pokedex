import Link from 'next/link';
import pokedexStyles from '../../styles/pokedex.module.css'
import Layout from '../../components/layout';
import GridPokemon from '../../components/gridPokemon';

export default function Pokedex() {

  const renderAllGridPokemon = () => {
    let pokemons = [];
    let numberString;
    for (let i = 1; i < 300; i++) {
      if (i.toString().length == 1) {
        numberString = '00' + i;
      } else if (i.toString().length == 2) {
        numberString = '0' + i;
      } else {
        numberString = i.toString();
      }
      pokemons.push(<GridPokemon number={numberString} key={numberString}/>);
    }
    return pokemons;
  }

  return (
    <Layout>
      <div className={pokedexStyles.container}>
        <a href="#Ability">Ability</a>
        <a href="#Pokedex">Pokedex</a>
        <a href="#Move">Move</a>
      </div>
      <div className={pokedexStyles.horizontal_container}>
        <section id="Ability" className={pokedexStyles.content} style={{backgroundColor: "blue"}}>
          pagina1
        </section>
        <section id="Pokedex" className={pokedexStyles.content} style={{backgroundColor: "purple"}}>
          <div className={pokedexStyles.vertical_container}>
            {renderAllGridPokemon()}
          </div>
        </section>
        <section id="Move" className={pokedexStyles.content} style={{backgroundColor: "tomato"}}>
          pagina3
        </section>
      </div>
    </Layout>
  )
}
