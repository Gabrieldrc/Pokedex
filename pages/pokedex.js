import Head from 'next/head'
import { useState } from 'react';
import utilStyles from '../styles/utils.module.css'
import pokedexStyles from '../styles/pokedex.module.css'

export default function Home() {

  return (
    <>
      <Head>
        <title>Pokedex</title>
      </Head>
      <section>
        Entraste en la POKEDEX!
      </section>
    </>
  )
}
