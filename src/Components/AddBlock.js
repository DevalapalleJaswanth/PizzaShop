import React from 'react';
import './AddBlock.css';
export default function AddBlock({ count, setCount }) {
  return (
    <div className="add-block">
      <div className="add" onClick={() => setCount(count + 1)}>
        {' '}
        +{' '}
      </div>
      <div className="count">{count ? count : '0'}</div>
      <div
        className="delete"
        onClick={() => {
          if (count !== 0) setCount(count - 1);
        }}
      >
        {' '}
        -{' '}
      </div>
    </div>
  );
}
