export enum LightColorType {
  text = '#212121',
  background = '#ffffff',
  accentBackground = '#ffffff',
  shadow = '#061835',
  inverted = '#212121',
}

export enum DarkColorType {
  text = '#ffffff',
  background = '#121212',
  accentBackground = '#3c4042',
  shadow = '#000000',
  inverted = '#ffffff',
}

export type ColorType = {
  text: LightColorType.text | DarkColorType.text;
  background: LightColorType.background | DarkColorType.background;
  accentBackground: LightColorType.accentBackground | DarkColorType.accentBackground;
  shadow: LightColorType.shadow | DarkColorType.shadow;
  inverted: LightColorType.inverted | DarkColorType.inverted;
};
