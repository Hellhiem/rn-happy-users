import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { BaseContainer } from 'components';

import { LoadingIndicator } from '../';

storiesOf('LoadingIndicator', module).add('withDefaultLook', () => (
  <BaseContainer>
    <LoadingIndicator />
  </BaseContainer>
));
