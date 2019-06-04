import React from 'react';
import pets from '../pets.json';
import PetPage from '../components/PetPage/PetPage';

const getIdFromProps = props => props.match.params.petId;

const findItemById = id => pets.find(item => item.id === id);

const Pet = props => {
  const id = getIdFromProps(props);
  const item = findItemById(id);

  return <PetPage {...item} />;
};

export default Pet;
