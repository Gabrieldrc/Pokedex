import Head from 'next/head'
import { useRouter } from 'next/router';
import { useState } from 'react';
import style from '../styles/pages/index.module.scss'

export default function Home() {
  const router = useRouter();
  const [ classPokeball, setClassPokeball ] = useState(style.pokeball_container);
  const [ classButtom, setClassButtom ] = useState(style.flickering_buttom);
  const [ classInterior, setClassInterior ] = useState(style.interior);

  const buttomClicked = () => {
    setClassButtom(style.normal_buttom);
    setClassPokeball(style.pokeball_animated);
    setClassInterior(style.interior_opening);
    setTimeout(() => {
      router.push('/pokedex');
    }, 1500);
  }

  return (
    <>
      <Head>
        <title>Pokedex</title>
      </Head>
      <section className={style.container}>
        <div className={classPokeball}>
          <div className={classInterior}>
            <div className={style.absolute_top}>
              <div className={style.top}></div>
              <div className={classButtom} onClick={buttomClicked}></div>
            </div>
            <div className={style.absolute_bottom}>
              <div className={style.bottom}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
