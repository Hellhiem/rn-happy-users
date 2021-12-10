import { BaseThemeType } from './BaseThemeType';
import { ColorType } from './ColorType';

export interface ThemeType extends BaseThemeType {
  colors: ColorType;
}
