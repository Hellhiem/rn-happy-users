import React from 'react';

import { storiesOf } from '@storybook/react-native';
import styled from 'styled-components/native';

import { BasicHeader } from '../BasicHeader';

storiesOf('Headers', module).add('withBasicHeader', () => <BasicHeader title="Happy Users" />);
