import Head from 'next/head'
import { useRouter } from 'next/router';
import { useState } from 'react';
import indexStyles from '../styles/index.module.css'

export default function Home() {
  const router = useRouter();
  const [ classPokeball, setClassPokeball ] = useState(indexStyles.pokeball_container);
  const [ classButtom, setClassButtom ] = useState(indexStyles.flickering_buttom);
  const [ classInterior, setClassInterior ] = useState(indexStyles.interior);

  const buttomClicked = () => {
    setClassButtom(indexStyles.normal_buttom);
    setClassPokeball(indexStyles.pokeball_animated);
    setClassInterior(indexStyles.interior_opening);
    setTimeout(() => {
      router.push('/pokedex');
    }, 1500);
  }

  return (
    <>
      <Head>
        <title>Pokedex</title>
      </Head>
      <section className={indexStyles.container}>
        <div className={classPokeball}>
          <div className={classInterior}>
            <div className={indexStyles.absolute_top}>
              <div className={indexStyles.top}></div>
              <div className={classButtom} onClick={buttomClicked}></div>
            </div>
            <div className={indexStyles.absolute_bottom}>
              <div className={indexStyles.bottom}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
