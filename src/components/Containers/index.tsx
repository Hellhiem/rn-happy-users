import styled from 'styled-components/native';

export const BaseContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const AccentContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.accentBackground};
`;
