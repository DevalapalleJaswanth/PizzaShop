import React from 'react';
import AddBlock from './AddBlock';
import DropDown from './DropDown';
import './PizzaCard.css';
export default function Card({ pizza }) {
  return (
    <div className="card">
      <div>
        <img className="image" src={pizza.image && pizza.image} />
      </div>
      <div className="name-block">
        <div style={{ width: '50%' }}>{pizza.name && pizza.name}</div>
        <AddBlock />
      </div>
      <div className="dropdown-block">
        <DropDown />
        <DropDown />
        <DropDown />
      </div>
    </div>
  );
}
