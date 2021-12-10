import { DarkColorType, ThemeType } from 'types';

import { baseTheme } from './baseTheme';

export const darkTheme: ThemeType = {
  colors: {
    text: DarkColorType.text,
    background: DarkColorType.background,
    accentBackground: DarkColorType.accentBackground,
    shadow: DarkColorType.shadow,
    inverted: DarkColorType.inverted,
  },
  ...baseTheme,
};
