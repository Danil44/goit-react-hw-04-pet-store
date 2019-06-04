import React from 'react';
import PropTypes from 'prop-types';
import PetsItem from '../PetsItem/PetsItem';
import styles from './PetsList.module.css';

const PetsList = ({ items }) => (
  <ul className={styles.list}>
    {items.map(item => (
      <PetsItem key={item.id} {...item} />
    ))}
  </ul>
);

PetsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default PetsList;
