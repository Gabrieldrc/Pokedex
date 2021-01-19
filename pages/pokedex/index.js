

import styles from '../../styles/pokedex.module.css'
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
      <div className={styles.container}>
        <a href="#Ability">Ability</a>
        <a href="#Pokedex">Pokedex</a>
        <a href="#Move">Move</a>
      </div>
      <div className={styles.horizontal_container}>
        <div className={styles.carousel}>
          <div className={styles.slider}>
            <section id="Pokedex" >
              <div className={styles.vertical_container}>
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
