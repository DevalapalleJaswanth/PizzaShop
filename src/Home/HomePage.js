import React, { useState, useEffect } from 'react';
import { PizzaCard } from '../Components';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import allActions from '../Actions';
import axios from 'axios';
import './HomePage.css';
export default function HomePage() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const Pizzas = useSelector((state) => state.PizzaList);
  // const Items = useSelector((state) => state.Items);
  const user = useSelector((state) => state.User);
  const navigate = useNavigate();
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
  //console.log(state, PizzaList);
  return (
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
  );
}
