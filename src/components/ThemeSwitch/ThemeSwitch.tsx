import React from 'react';

import { Switch } from './ThemeSwitchStyle';

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
