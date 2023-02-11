import { Theme } from '@mui/material';

import { darkTheme } from './darkTheme';
import { lightTheme } from './lighTheme';
import { customTheme } from './customTheme';

export const SELECTED_THEME_DEFINITION: { [key: string]: Theme } = {
  light: lightTheme,
  dark: darkTheme,
  custom: customTheme
};

export const VALID_THEMES = ['light', 'dark', 'custom'];
