import React from 'react';

import styled from 'styled-components/native';
import { ColorType } from 'types';

const Container = styled.View`
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
