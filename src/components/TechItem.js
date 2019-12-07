import React from 'react';

const TechItem = ({ title, special }) => {
  return (
    <div className="col s6 m4 l3 xl2">
      <h5>
        <span className={`${special && 'blue lighten-4'}`}>{title}</span>
      </h5>
    </div>
  );
};

export default TechItem;
