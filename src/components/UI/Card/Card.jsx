import React from 'react';
import styles from './Card.module.css';

const Card = ({ title, image, links, cardClass }) => {
  return (
    <div className={`${styles.card} ${styles[cardClass]}`}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <div className={styles.cardBody}>
        <div className={styles.cardThumb}>
          <img src={image} alt={title} className={styles.thumb} />
        </div>
        <ul className={styles.links}>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
