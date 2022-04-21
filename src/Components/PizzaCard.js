import React from 'react';
import AddBlock from './AddBlock';
import DropDown from './DropDown';
export default function Card(props) {
  return (
    <div className="card">
      <div className="image">Pizza Image</div>
      <div className="name-block">
        <div>Pizza Name</div>
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
