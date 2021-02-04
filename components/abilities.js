import style from '../styles/components/abilities.module.scss';
import DetailsLayout from './layouts/detailsLayout';
import { getResourceCS } from '../lib/pokedex.api';
import { useState } from 'react';
import { capitalize } from '../lib/functions';

export default function Abilities({ abilities }) {
  return(
    <DetailsLayout>
      <h1 className={style.title1}>Abilities:</h1>
      <div className={style.abilitiesContainer}>
        {abilities.map((element, index) => {
          return<Ability ability={element.ability} key={`Abilities_${index}`}/>;
        })}
      </div>
    </DetailsLayout>
  );
}

function Ability({ ability }) {
  const { data, isLoading, isError } = getResourceCS(ability.url);
  const [ display, setDisplay ] = useState("none");
  if (isLoading) {
    return(
      <div className={style.ability} key={ability.name}>
        <div className={style.title2}>{ability.name}</div>
      </div>
    );
  }
  if (isError) {
    return <div>Error</div>;
  }
  const effectData = data.data.effect_entries.filter(element => element.language.name === "en");
  return(
    <div className={style.ability} key={ability.name}>
      <div className={style.title2}>{ability.name}</div>
      <div className={style.infoButtom}
        onClick={() => setDisplay("flex")}
      >?</div>
      <div style={{display: display}} className={style.infoContainer}>
        <div className={style.header}>
          <div className={style.title3}>Ability info</div>
          <div className={style.closeButtom}
            onClick={() => setDisplay("none")}
          >x Close</div>
        </div>
        <div className={style.title2}>{capitalize(ability.name)}</div>
        <p>{effectData[0].short_effect}</p>
      </div>
    </div>
  );
}