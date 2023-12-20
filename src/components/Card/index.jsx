import React from 'react';
import styles from './card.module.css';

const Card = ({ data }) => {
  return (
    <a href={data?.url} target='_blank' rel='noreferrer' className={styles.card}>
      <div className={styles.cardLeftSide}>
        <h3>{data?.period}</h3>
      </div>
      <div className={styles.cardRightSide}>
        <h3>{`${data?.role}-${data?.company}`}</h3>
        <p>{data?.desc}</p>
        {data?.technologies &&
          <div>
            <ul className={styles.techList}>
              {data?.technologies.map((technology, i) => (
                <li key={i}>{technology}</li>
              ))}
            </ul>
          </div>
        }
      </div>
    </a>
  )
};

export default Card;