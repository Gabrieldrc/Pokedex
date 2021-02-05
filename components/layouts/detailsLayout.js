import styles from '../../styles/components/detailsLayout.module.scss';

export default function detailsLayout({ children, evolDetails=false }) {
  if (evolDetails) {
    return (
      <div className={styles.evolContainer}>
        <>{children}</>
      </div>
    )
  }
  return (
    <div className={styles.container}>
      <>{children}</>
    </div>
  )
}
