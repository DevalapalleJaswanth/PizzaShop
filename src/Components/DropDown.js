import React, { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import './DropDown.css';
export default function DropDown({ label, list, state, setState }) {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <div>
      <div>
        <div className="label">{label && label} : </div>
        <div
          onClick={() => {
            if (showDropDown) setShowDropDown(false);
            else setShowDropDown(true);
          }}
        >
          {!showDropDown ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
        </div>
      </div>
      <div
        className="list"
        style={{ display: showDropDown ? 'block' : 'none' }}
      >
        {list &&
          list.map((item, i) => {
            <div key={i} className="item">
              <div> {item} </div>
              <div>
                <input type="checkbox" />{' '}
              </div>
            </div>;
          })}
      </div>
    </div>
  );
}
