export enum LightColorType {
  text = '#212121',
  background = '#ffffff',
  accentBackground = '#ffffff',
}

export enum DarkColorType {
  text = '#ffffff',
  background = '#212121',
  accentBackground = '#3c4042',
}

export type ColorType = {
  text: LightColorType.text | DarkColorType.text;
  background: LightColorType.background | DarkColorType.background;
  accentBackground: LightColorType.accentBackground | DarkColorType.accentBackground;
};
