import React from 'react';
import styles from './card.module.css';

const Card = ({ data, cardType = 'experience' }) => {
  if(cardType === 'experience') {
    return (
      <a href={data?.url} target='_blank' rel='noreferrer' className={styles.cardExperience}>
        <div className={styles.cardExperienceLeftSide}>
          <h3>{data?.period}</h3>
        </div>
        <div className={styles.cardExperienceRightSide}>
          <h3>{`${data?.role} - ${data?.company}`}</h3>
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
  } else {
    return (
      <a href={data?.url} target='_blank' rel='noreferrer' className={styles.cardProjects}>
        <div className={styles.cardProjectsLeftSide}>
          <img src={data?.img} alt={data?.title} />
        </div>
        <div className={styles.cardProjectsRightSide}>
          <h3>{data.title}</h3>
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
  }
};

export default Card;