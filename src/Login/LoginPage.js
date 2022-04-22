import React, { useState } from 'react';
import './LoginPage.css';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../Actions';
import { useNavigate } from 'react-router-dom';
export default function LoginPage() {
  const navigate = useNavigate();
  const User = useSelector((state) => state.User);
  //console.log(User);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState();
  const handleChange = (e) => {
    if (e.target.value === '') {
      setError({ ...error, [e.target.name]: `${e.target.name} is required` });
    } else {
      setError({ ...error, [e.target.name]: '' });
    }
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    var errKeys = Object.keys(user).filter((key) => {
      if (user[key] === '') {
        return key;
      }
    });
    if (errKeys.length >= 1) {
      alert('Please fill all fields');
    } else {
      //console.log(user, User[0], User[1]);
      let check1 =
        User.length > 0
          ? User[0].filter((ele) => {
              if (
                user.email.toLowerCase() === ele.email.toLowerCase() &&
                ele.password === user.password
              ) {
                return ele;
              }
            })
          : '';
      let check2 =
        User.length > 0
          ? User[1].filter((ele) => {
              if (
                user.email.toLowerCase() === ele.email.toLowerCase() &&
                ele.password === user.password
              ) {
                return ele;
              }
            })
          : '';

      if (check1.length > 0) {
        //console.log(user, error);
        navigate('/HomePage', { state: { user: check1[0], role: 'admin' } });
      } else if (check2.length > 0) {
        navigate('/HomePage', { state: { user: check2[0], role: 'customer' } });
      } else {
        alert('user name or password are not correct');
      }
    }
  };
  return (
    <div className="form-text">
      <div className="form-container ">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h2>Login</h2>
          <div className="flex-column">
            <label>Email:</label>
            <input
              type="text"
              id="Email"
              name="email"
              onChange={(e) => {
                handleChange(e);
              }}
              value={user.email}
            />
            <div className="error">{error && error.name}</div>
          </div>
          <div className="flex-column">
            <label>Password:</label>
            <input
              type="password"
              id="Password"
              name="password"
              onChange={(e) => {
                handleChange(e);
              }}
              value={user.password}
            />
            <div className="error">{error && error.password}</div>
          </div>
          <div>
            <button type="submit" className="login-btn">
              Login
            </button>
          </div>
        </form>
      </div>
      <div className="display-flex">
        <div>New User?</div>
        <button
          className="signup-btn"
          onClick={() => {
            navigate('/SignUp');
          }}
        >
          SignUp
        </button>
      </div>
    </div>
  );
}
