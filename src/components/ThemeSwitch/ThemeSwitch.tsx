import React from 'react';
import styled from 'styled-components';

const Switch = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;

  .switch label {
    /* dark */
    input[type='checkbox']:checked + .lever {
      background-color: #c1c1c1;

      /* circle */
      &:after {
        background-color: #232323;
      }
    }

    /* light */
    .lever {
      background-color: #c1c1c1;

      /* circle */
      &:after {
        background-color: #ffffff;
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
