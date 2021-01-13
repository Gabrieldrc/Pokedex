import Head from 'next/head';
import styles from '../styles/layout.module.css';

export default function Layout({ children}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokedex</title>
      </Head>
      <>{children}</>
    </div>
  )
}
