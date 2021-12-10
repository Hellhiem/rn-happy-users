import React from 'react';

import { storiesOf } from '@storybook/react-native';
import styled from 'styled-components/native';

import { UserTile } from '../';
import { BaseContainer } from '../../Containers';

const Container = styled(BaseContainer)`
  height: 300px;
`;

storiesOf('UserTile', module).add('withDefaultLook', () => (
  <Container>
    <UserTile
      userImageUrl="https://randomuser.me/api/portraits/med/women/6.jpg"
      userName="Joann Ferguson"
      phoneNumber="(734)-734-4921"
    />
  </Container>
));
