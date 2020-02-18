import styled from 'styled-components';

import { primaryColor } from '../../styles/base-colors';

const Switch = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;

  .switch label {
    input[type='checkbox']:checked + .lever {
      &:after {
        background-color: ${primaryColor};
      }

      background-color: ${primaryColor};
    }

    .lever {
      background-color: ${primaryColor};

      &:after {
        background-color: ${primaryColor};
      }
    }
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Switch };
