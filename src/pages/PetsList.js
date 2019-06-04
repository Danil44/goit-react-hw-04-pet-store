import React from 'react';
import pets from '../pets.json';
import PetsList from '../components/PetsList/PetsList';

const Pets = () => <PetsList items={pets} />;

export default Pets;
