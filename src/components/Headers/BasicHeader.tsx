import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { BookIconDark, BookIconLight } from 'assets/images';
import { isAndroid, isDarkMode } from 'lib/device';
import styled from 'styled-components/native';
import { Route } from 'types';

import { Header2 } from '../Typography';

type ContainerPropsType = {
  title?: string;
};

const Container = styled.View<ContainerPropsType>`
  flex-direction: row;
  justify-content: ${({ title }) => (title ? 'space-between' : 'flex-end')};
  align-items: center;
  height: 68px;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.accentBackground};
  padding-horizontal: 16px;
  margin-top: ${isAndroid() ? StatusBar.currentHeight : 0}px;
`;

const TouchableIcon = styled.TouchableOpacity`
  justify-content: center;
  align-items:center;
  border-width: 0.5px;
  width: 48px;
  height: 48px;
  border-radius: 24px
  border-color: ${({ theme }) => theme.colors.inverted};
`;

type PropsType = {
  title?: string;
};

export const BasicHeader = ({ title }: PropsType) => {
  const { navigate } = useNavigation();

  const openStorybook = () => {
    navigate(Route.Storybook);
  };

  const getBookIcon = () => (isDarkMode() ? <BookIconLight /> : <BookIconDark />);

  return (
    <SafeAreaView>
      <Container title={title}>
        {title && <Header2>{title}</Header2>}
        <TouchableIcon onPress={openStorybook}>{getBookIcon()}</TouchableIcon>
      </Container>
    </SafeAreaView>
  );
};
