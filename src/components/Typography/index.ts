import styled from 'styled-components/native';

export const Header1 = styled.Text`
  font-family: ${({ theme }) => theme.fonts.family.rubikBold};
  font-size: ${({ theme }) => theme.fonts.size.h1}px;
  color: ${({ theme }) => theme.colors.text};
  line-height: 32px;
`;

export const Header2 = styled.Text`
  font-family: ${({ theme }) => theme.fonts.family.rubikSemiBold};
  font-size: ${({ theme }) => theme.fonts.size.h2}px;
  color: ${({ theme }) => theme.colors.text};
  line-height: 28px;
`;

export const Body = styled.Text`
  font-family: ${({ theme }) => theme.fonts.family.rubikRegular};
  font-size: ${({ theme }) => theme.fonts.size.body}px;
  color: ${({ theme }) => theme.colors.text};
  line-height: 22px;
`;

export const SmallBody = styled.Text`
  font-family: ${({ theme }) => theme.fonts.family.rubikRegular};
  font-size: ${({ theme }) => theme.fonts.size.smallBody}px;
  color: ${({ theme }) => theme.colors.text};
  line-height: 20px;
`;
