import React from 'react';
import styled from 'styled-components';

import { strongPrimaryColor } from '../styles/base-colors';

const IconsContainer = styled.div`
  font-size: 3em;

  i {
    color: ${strongPrimaryColor};
    padding: 10px;
  }
`;

const SocialIcons = () => {
  return (
    <IconsContainer>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/Glup3">
        <i className="fab fa-github"></i>
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/11143225/glup3">
        <i className="fab fa-stack-overflow"></i>
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/glup3-tran/">
        <i className="fab fa-linkedin"></i>
      </a>
      <a target="_blank" rel="noopener noreferrer" href="mailto:glup3.tran@gmail.com">
        <i className="fas fa-at"></i>
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCN8LfiD2wp_DmTbiVXNhl0g">
        <i className="fab fa-youtube"></i>
      </a>
    </IconsContainer>
  );
};

export default SocialIcons;
