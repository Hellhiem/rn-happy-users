import React, { useEffect } from 'react';

import { LocationPreview } from 'components/LocationPreview';
import { i18n } from 'config/translations';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import styled from 'styled-components/native';
import { CoordinatesType } from 'types';

import { AccentContainer, BaseContainer } from '../Containers';
import { KeyData } from '../KeyData';
import { Header2 } from '../Typography';

const Container = styled(BaseContainer)`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.modalBackground};
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const ContentContainer = styled(AccentContainer)`
  padding: 16px;
  width: 100%;
  border-radius: 16px;
`;

const LocationContainer = styled.View`
  margin-top: 16px;
`;

const baseTranslationPath = 'Components:UserDetailsPopup:';

type PropsType = {
  email: string;
  dateOfBirth: string;
  gender: string;
  city: string;
  coordinates: CoordinatesType;
  isVisible?: boolean;
};

const animationDuration = 200;

export const UserDetailsPopup = ({
  email,
  dateOfBirth,
  gender,
  city,
  coordinates,
  isVisible,
}: PropsType) => {
  const scaleProgress = useSharedValue(0);

  const reanimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scaleProgress.value }],
    };
  }, []);

  useEffect(() => {
    isVisible
      ? (scaleProgress.value = withTiming(1, { duration: animationDuration }))
      : (scaleProgress.value = withTiming(0, { duration: animationDuration }));
  }, [isVisible]);

  return (
    <Container>
      <ContentContainer style={reanimatedStyles} as={Animated.View}>
        <Header2>{i18n.t(`${baseTranslationPath}basicInfo`)}</Header2>
        <KeyData dataKey={i18n.t(`${baseTranslationPath}email`)} value={email} />
        <KeyData dataKey={i18n.t(`${baseTranslationPath}dataOfBirth`)} value={dateOfBirth} />
        <KeyData dataKey={i18n.t(`${baseTranslationPath}gender`)} value={gender} />
        <KeyData dataKey={i18n.t(`${baseTranslationPath}city`)} value={city} />
        <LocationContainer>
          <Header2>{i18n.t(`${baseTranslationPath}currentLocation`)}</Header2>
          <LocationPreview coordinates={coordinates} />
        </LocationContainer>
      </ContentContainer>
    </Container>
  );
};
