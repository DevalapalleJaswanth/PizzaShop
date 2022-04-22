import React, { useState, useEffect } from 'react';
import { PizzaCard } from '../Components';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import allActions from '../Actions';
import axios from 'axios';
import './HomePage.css';
export default function HomePage() {
  const [count, setCount] = useState();
  const [inventory, setInventory] = useState();
  const dispatch = useDispatch();
  // const state = useSelector((state) => state);
  const Pizzas = useSelector((state) => state.PizzaList);
  // const Items = useSelector((state) => state.Items);
  const user = useSelector((state) => state.User);
  const navigate = useNavigate();
  const { state } = useLocation();
  useEffect(() => {
    let response = axios
      .get('https://6215fab47428a1d2a3567953.mockapi.io/pizza')
      .then((resp) => {
        //console.log(resp.data);
        dispatch(allActions.PizzaListActions.getPizzaListData(resp.data));
      })
      .catch((err) => console.log(err));
    let respon = axios
      .get('https://6215fab47428a1d2a3567953.mockapi.io/pizzaitems')
      .then((resp) => {
        //console.log(resp.data);
        dispatch(allActions.PizzaListActions.getPizzaItemsData(resp.data));
      })
      .catch((err) => console.log(err));
  }, []);

  // useEffect(()=>{
  //   Pizzas = useSelector((state) => state.PizzaList);
  // },[Pizzas])

  console.log(Pizzas);

  function handleUpdate(item, i) {
    let temp =
      Pizzas.items &&
      Pizzas !== [] &&
      Pizzas.items.map((ele, j) => {
        if (ele.label === item.label) {
          let tempCount = [...ele.count];
          tempCount[i] = +count;
          return { ...ele, count: [...tempCount] };
        } else {
          return { ...ele };
        }
      });

    setInventory([...temp]);
    console.log(temp, inventory);
    Pizzas.items = [...temp];
    dispatch(allActions.PizzaListActions.getPizzaItemsData([...temp]));
  }

  return (
    <div>
      {state &&
        state.role &&
        (state.role === 'customer' ? (
          <div className="flex">
            {Pizzas.list &&
              Pizzas !== [] &&
              Pizzas.list.map((ele, i) => (
                <PizzaCard
                  pizza={ele}
                  key={i}
                  pizzaItems={Pizzas.items && Pizzas.items}
                />
              ))}
          </div>
        ) : (
          <div>
            <h1>Admin Inventory Page</h1>
            <br />
            {Pizzas.items &&
              Pizzas !== [] &&
              Pizzas.items.map((ele, i) => (
                <>
                  <table border="1" key={i}>
                    <h2>{ele.label}</h2>
                    <tr>
                      <th>Item</th>
                      <th>Count</th>
                      <th>Update Count</th>
                    </tr>

                    {ele.item.map((value, i) => (
                      <tr>
                        <td>{value}</td>
                        <td>{ele.count[i]}</td>
                        <td>
                          <input
                            type="number"
                            placeholder="Enter value"
                            style={{ width: '100px' }}
                            onChange={(e) => {
                              setCount(e.target.value);
                            }}
                          />
                          <span>
                            <button
                              style={{
                                backgroundColor: 'black',
                                color: 'white',
                              }}
                              onClick={(e) => {
                                handleUpdate(ele, i);
                              }}
                            >
                              Update
                            </button>
                          </span>{' '}
                        </td>
                      </tr>
                    ))}
                  </table>
                  <br />
                </>
              ))}
          </div>
        ))}
    </div>
  );
}
