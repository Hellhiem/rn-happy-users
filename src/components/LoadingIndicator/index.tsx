import React from 'react';

import styled from 'styled-components/native';

import { BaseContainer } from '../Containers';

const Container = styled(BaseContainer)`
  padding: 16px;
  justify-content: center;
  align-items: center;
`;

const Loading = styled.ActivityIndicator.attrs(({ theme }) => {
  return {
    color: theme.colors.inverted,
  };
})``;

export const LoadingIndicator = () => {
  return (
    <Container>
      <Loading />
    </Container>
  );
};
