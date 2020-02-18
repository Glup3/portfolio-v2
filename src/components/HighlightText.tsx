import React from 'react';
import styled from 'styled-components';

import { accentColor, strongPrimaryColor } from '../styles/base-colors';

interface HighlightTextPropsType {
  text: string;
}

const Text = styled.span`
  border-bottom: 2px solid ${accentColor};
  padding-bottom: 1px;
  color: ${strongPrimaryColor};
`;

const HighlightText = ({ text }: HighlightTextPropsType) => {
  return <Text className="highlighted-text">{text}</Text>;
};

export default HighlightText;
