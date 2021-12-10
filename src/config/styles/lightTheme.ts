import { LightColorType, ThemeType } from 'types';

import { baseTheme } from './baseTheme';

export const lightTheme: ThemeType = {
  colors: {
    text: LightColorType.text,
    background: LightColorType.background,
    accentBackground: LightColorType.accentBackground,
    shadow: LightColorType.shadow,
  },
  ...baseTheme,
};
