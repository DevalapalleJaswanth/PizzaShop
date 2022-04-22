import React, { useState, useEffect } from 'react';
import AddBlock from './AddBlock';
import DropDown from './DropDown';
import './PizzaCard.css';
export default function Card({ pizza, pizzaItems }) {
  const [state, setState] = useState();
  const [items, setItems] = useState();
  useEffect(() => {
    let temp =
      pizzaItems &&
      pizzaItems.map((item) => {
        return { ...item, showDropDown: false };
      });
    setItems(temp);
  }, []);
  console.log(state);
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
        {items &&
          items.map((ele, i) => (
            <DropDown
              {...ele}
              key={i}
              setState={setState}
              setItems={setItems}
              items={items}
            />
          ))}
      </div>
      <div style={{ padding: '10px' }}>
        {state &&
          state.map((item, i) => (
            <div key={i} className="item">
              <div> {item} </div>
              <div>
                <input type="checkbox" style={{ width: '30px' }} />{' '}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
