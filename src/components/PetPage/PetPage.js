import React from 'react';
import PropTypes from 'prop-types';
import BackButton from '../BackButton/BackButton';
import styles from './PetPage.module.css';

const PetPage = ({ image, name, age, breed, gender, color, description }) => (
  <div className={styles.container}>
    <BackButton styles={styles.btn} />

    <h4 className={styles.title}>All about {name}</h4>
    <div className={styles.imgWrapper}>
      <img src={image} alt={name} className={styles.img} />
    </div>
    <div className={styles.infoWrapper}>
      <p className={styles.info}>
        <strong>Age:</strong> {age}
      </p>
      <p className={styles.info}>
        <strong>Gender:</strong> {gender}
      </p>
      <p className={styles.info}>
        <strong>Color:</strong> {color}
      </p>
      <p className={styles.info}>
        <strong>Breed:</strong> {breed}
      </p>
    </div>
    <p className={styles.desc}>{description}</p>
  </div>
);

PetPage.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  breed: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PetPage;
