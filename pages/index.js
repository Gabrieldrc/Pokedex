import Head from 'next/head'
import { useState } from 'react';
import utilStyles from '../styles/utils.module.css'
import indexStyles from '../styles/index.module.css'

export default function Home() {
  const [ classPokeball, setClassPokeball ] = useState(indexStyles.pokeball);
  const [ classButtom, setClassButtom ] = useState(indexStyles.flickering_buttom);
  const [ classInterior, setClassInterior ] = useState(indexStyles.interior);

  const buttomClicked = () => {
    setClassButtom(indexStyles.normal_buttom);
    setClassPokeball(indexStyles.container_animated);
    setClassInterior(indexStyles.interior_opening);
  }

  return (
    <>
      <Head>
        <title>Pokedex</title>
      </Head>
      <section className={indexStyles.container}>
        <div className={classPokeball}>
          <div className={indexStyles.top}></div>
          <div className={classInterior}></div>
          <div className={indexStyles.bottom}></div>
          <div className={classButtom} onClick={buttomClicked}></div>
        </div>
      </section>
    </>
  )
}
