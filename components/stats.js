import DetailsLayout from './layouts/detailsLayout';
import style from '../styles/components/stats.module.scss';

export default function Stats({ stats }) {
  const max = 150;
  console.log(stats)
  return(
    <DetailsLayout>
      <h1>Stats:</h1>
      <div className={style.chartContainer}>
        {stats.map(element => {
          let percentage = element.base_stat * 10 / 15;
          return(
            <div className={style.stat}>
              <div className={style.barContainer}>
                <div style={{height: `${percentage}%`}} className={style.bar}></div>
              </div>
              <div className={style.description}><h3>{element.stat.name}</h3></div>
            </div>
          );
        })}
      </div>
    </DetailsLayout>
  );
}