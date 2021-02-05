import Head from 'next/head';
import styles from '../../styles/components/layout.module.scss';

export default function Layout({ children}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokédex</title>
      </Head>
      <>{children}</>
    </div>
  )
}
