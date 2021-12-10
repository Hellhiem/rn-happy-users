export enum LightColorType {
  text = '#212121',
  background = '#ffffff',
  accentBackground = '#ffffff',
  shadow = '#061835',
  inverted = '#212121',
  modalBackground = 'rgba(0, 0, 0, 0.5)',
}

export enum DarkColorType {
  text = '#ffffff',
  background = '#121212',
  accentBackground = '#3c4042',
  shadow = '#000000',
  inverted = '#ffffff',
  modalBackground = 'rgba(255, 255, 255, 0.5)',
}

export type ColorType = {
  text: LightColorType.text | DarkColorType.text;
  background: LightColorType.background | DarkColorType.background;
  accentBackground: LightColorType.accentBackground | DarkColorType.accentBackground;
  shadow: LightColorType.shadow | DarkColorType.shadow;
  inverted: LightColorType.inverted | DarkColorType.inverted;
  modalBackground: LightColorType.modalBackground | DarkColorType.modalBackground;
};
