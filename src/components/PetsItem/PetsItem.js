import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './PetsItem.module.css';

const PetsItem = ({ image, name, id }) => (
  <li>
    <Link to={`/pets/${id}`} className={styles.container}>
      <div className={styles.imgWrapper}>
        <img src={image} alt={name} className={styles.img} />
      </div>
      <h4 className={styles.name}>{name}</h4>
    </Link>
  </li>
);

PetsItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default PetsItem;
