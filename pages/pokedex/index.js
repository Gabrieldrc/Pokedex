import style from '../../styles/pages/pokedex_index.module.scss'
import Layout from '../../components/layout';
import GridPokemon from '../../components/gridPokemon';

export default function Pokedex() {
  const renderAllGridPokemon = () => {
    let pokemons = [];
    for (let i = 1; i < 300; i++) {
      pokemons.push(<GridPokemon number={i} key={i}/>);
    }
    return pokemons;
  }

  return (
    <Layout>
      <div className={style.container}>
        <a href="#Ability">Ability</a>
        <a href="#Pokedex">Pokedex</a>
        <a href="#Move">Move</a>
      </div>
      <div className={style.horizontal_container}>
        <div className={style.carousel}>
          <div className={style.slider}>
            <section id="Pokedex" >
              <div className={style.vertical_container}>
                {renderAllGridPokemon()}
              </div>
            </section>
            <section id="Move" style={{backgroundColor: "tomato"}}>
              pagina3
            </section>
            <section id="Ability" style={{backgroundColor: "blue"}}>
              pagina1
            </section>
          </div>
        </div>
      </div>
    </Layout>
  )
}
