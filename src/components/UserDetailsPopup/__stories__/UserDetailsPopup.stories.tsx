import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { CoordinatesType } from 'types';

import { UserDetailsPopup } from '../';

const coordinates: CoordinatesType = {
  latitude: '37.78825',
  longitude: '-122.4324',
};

storiesOf('UserDetailsPopup', module).add('withDefaultLook', () => (
  <UserDetailsPopup
    email="joey.shelton@example.com"
    dateOfBirth="12.05.1994"
    gender="female"
    city="Amsterdam"
    coordinates={coordinates}
  />
));
