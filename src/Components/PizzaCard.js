import React, { useState, useEffect } from 'react';
import AddBlock from './AddBlock';
import DropDown from './DropDown';
import './PizzaCard.css';
export default function Card({ pizza, pizzaItems, setOrder }) {
  const [state, setState] = useState();
  const [items, setItems] = useState();
  const [count, setCount] = useState(0);
  const [temp, setTemp] = useState('');

  useEffect(() => {
    let temp =
      pizzaItems &&
      pizzaItems.map((item) => {
        return { ...item, showDropDown: false };
      });
    setItems(temp);
  }, [pizzaItems]);
  //console.log(items);
  function handleChange(e) {
    //console.log(e);

    if (e.target.checked === true) {
      setTemp([...temp, e.target.value]);
      if (count >= 1) {
        setOrder([
          ...order,
          { name: pizza.name, count: count, customization: temp },
        ]);
      }
    }
    console.log(temp, count);
  }
  return (
    <div className="card">
      <div>
        <img className="image" src={pizza.image && pizza.image} />
      </div>
      <div className="name-block">
        <div style={{ width: '50%' }}>{pizza.name && pizza.name}</div>
        <AddBlock setCount={setCount} count={count} />
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
                {item == 'Hand Tossed' ||
                item == 'Wheat Crust' ||
                item == 'Thin Crust' ||
                item == 'Pan Pizza' ||
                item == 'Cheese Burst' ? (
                  <input
                    type="radio"
                    name="Crust"
                    value={item}
                    style={{ width: '30px' }}
                    onChange={(e) => {
                      //console.log(e.target.value);
                      handleChange(e);
                    }}
                  />
                ) : (
                  <input
                    type="checkbox"
                    style={{ width: '30px' }}
                    value={item}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
