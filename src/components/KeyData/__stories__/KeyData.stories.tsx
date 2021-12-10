import React from 'react';

import { storiesOf } from '@storybook/react-native';

import { KeyData } from '../';

storiesOf('KeyData', module).add('withDefaultLook', () => <KeyData dataKey="Key" value="Value" />);
