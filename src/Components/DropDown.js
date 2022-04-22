import React, { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import './DropDown.css';
export default function DropDown({
  label,
  item,
  showDropDown,
  items,
  setItems,
  setState,
}) {
  return (
    <div>
      <div
        className="label"
        onClick={() => {
          if (showDropDown) {
            let temp =
              items &&
              label &&
              items.map((ele) => {
                return { ...ele, showDropDown: false };
              });
            setItems([...temp]);
            setState('');
          } else {
            let temp =
              items &&
              label &&
              items.map((ele) => {
                if (ele.label === label) {
                  return { ...ele, showDropDown: true };
                } else {
                  return { ...ele, showDropDown: false };
                }
              });
            setItems([...temp]);
            setState([...item]);
          }
        }}
      >
        <div>{label && label} </div>
        <div>{!showDropDown ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}</div>
      </div>
    </div>
  );
}
