import React, { useState, useEffect } from 'react';
import './style.css';
import LoginPage from './Login';
import SignUp from './SignUp';
import HomePage from './Home';
import Profile from './Profile';
import allActions from './Actions';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

export default function App() {
  const dispatch = useDispatch();
  const PizzaList = useSelector((state) => state.PizzaList);
  const user = useSelector((state) => state.User);
  useEffect(() => {
    let resp = axios
      .get('https://6215fab47428a1d2a3567953.mockapi.io/user')
      .then((resp) => dispatch(allActions.UserActions.getUsers(resp.data)))
      .catch((err) => console.log(err));
  }, []);
  console.log(user);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/HomePage" element={<HomePage />} />
          {/* <Route path="/HomePage/DetailsPage/:id" element={<DetailsPage />} /> */}
          {/* <Route path="/ProfilePage" element={<Profile />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
