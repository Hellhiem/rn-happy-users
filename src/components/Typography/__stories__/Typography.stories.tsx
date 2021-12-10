import React from 'react';

import { storiesOf } from '@storybook/react-native';

import { Header1, Header2, Body, SmallBody } from '../';

storiesOf('Typography', module)
  .add('withHeader1', () => <Header1>Header1</Header1>)
  .add('withHeader2', () => <Header2>Header2</Header2>)

  .add('withBody', () => <Body>Body1 Text</Body>)
  .add('withSmallBody', () => <SmallBody>Body1 Text</SmallBody>);
