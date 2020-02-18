import React from 'react';
import styled from 'styled-components';

import { accentColor } from '../styles/base-colors';

interface HighlightTextPropsType {
  text: string;
}

const Text = styled.span`
  border-bottom: 2px solid ${accentColor};
  padding-bottom: 1px;
`;

const HighlightText = ({ text }: HighlightTextPropsType) => {
  return <Text className="highlighted-text">{text}</Text>;
};

export default HighlightText;
