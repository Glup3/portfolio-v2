import React from 'react';
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

interface ThemeSwitchPropsType {
  changeTheme: Function;
  isDarkMode: boolean;
}

const ThemeSwitch = ({ changeTheme, isDarkMode }: ThemeSwitchPropsType) => {
  return (
    <Switch>
      <div className="switch">
        <label>
          Light
          <input type="checkbox" checked={!!isDarkMode} onChange={() => changeTheme()} />
          <span className="lever"></span>
          Dark
        </label>
      </div>
    </Switch>
  );
};

export default ThemeSwitch;
