import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { CoordinatesType } from 'types';

import { LocationPreview } from '../';

const coordinates: CoordinatesType = {
  latitude: '37.78825',
  longitude: '-122.4324',
};

storiesOf('LocationPreview', module).add('withDefaultLook', () => (
  <LocationPreview coordinates={coordinates} />
));
