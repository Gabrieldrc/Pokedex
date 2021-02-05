import styles from '../../styles/components/detailsLayout.module.scss';

export default function detailsLayout({ children}) {
  return (
    <div className={styles.container}>
      <>{children}</>
    </div>
  )
}
