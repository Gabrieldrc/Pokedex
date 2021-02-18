import style from '../styles/components/searchEngine.module.scss';

export default function searchEngine() {
  return(
    <div className={style.container}>
      <div className={style.bar}>
        <form>
          <input 
            className={style.input}
            type="text"
            minLength="1" maxLength="20"
            pattern="\d{1,3}|[A-z]+"
            />
          <input type="submit" value="submit"/>
        </form>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" fill="black" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg> */}
      </div>
      {/* <div className={style.menuContainer}>
        <div className={style.exitMenu}>x</div>
        <div>
          <input type="checkbox"/>
          
        </div>
      </div> */}
    </div>
  );
}