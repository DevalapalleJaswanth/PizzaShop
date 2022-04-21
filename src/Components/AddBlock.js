import React from 'react';
import './AddBlock.css';
export default function AddBlock(props) {
  return (
    <div className="add-block">
      <div className="add"> + </div>
      <div className="count">count</div>
      <div className="delete"> - </div>
    </div>
  );
}
