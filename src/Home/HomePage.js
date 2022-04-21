import React, { useState, useEffect } from 'react';
import { PizzaCard } from '../Components';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import allActions from '../Actions';
import axios from 'axios';
export default function HomePage() {
  const dispatch = useDispatch();
  const PizzaList = useSelector((state) => state.PizzaList);
  const user = useSelector((state) => state.User);
  const navigate = useNavigate();
  useEffect(() => {
    let response = axios
      .get('https://6215fab47428a1d2a3567953.mockapi.io/pizza')
      .then((resp) => {
        dispatch(allActions.PizzaListActions.getPizzaData(resp.data));
      });
  }, []);
  console.log(PizzaList);
  return (
    <div>
      {PizzaList &&
        PizzaList !== [] &&
        PizzaList.map((ele, i) => <PizzaCard pizza={ele} key={i} />)}
    </div>
  );
}
