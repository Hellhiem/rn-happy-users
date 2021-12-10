import React from 'react';

import { storiesOf } from '@storybook/react-native';
import styled from 'styled-components/native';

import { BaseContainer, AccentContainer } from '../';

const Container = styled(BaseContainer)`
  height: 200px;
`;

const StyledAccentContainer = styled(AccentContainer)`
  height: 200px;
`;

storiesOf('Containers', module)
  .add('witBaseContainer', () => <Container />)
  .add('witAccentContainer', () => <StyledAccentContainer />);
