import React from 'react';
import HighlightText from './HighlightText';

interface TechItemPropsType {
  title: string;
  special: boolean;
}

const TechItem = ({ title, special }: TechItemPropsType) => {
  return (
    <div className="col s6 m4 l3 xl2">
      <h5>{!special ? <span>{title}</span> : <HighlightText text={title} />}</h5>
    </div>
  );
};

export default TechItem;
