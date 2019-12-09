import React from 'react';

interface HighlightTextPropsType {
  text: string;
}

const HighlightText = ({ text }: HighlightTextPropsType) => {
  return <span className="highlighted-text">{text}</span>;
};

export default HighlightText;
