import React from 'react';
export default function DropDown({ label, list, state, setState }) {
  return (
    <div>
      <div>
        <div className="label">{label && label} : </div>
        <div className="value">{state && state}</div>
        <div></div>
      </div>
      <div className="list">
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
