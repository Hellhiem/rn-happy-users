import React from 'react';

import { LocationPreview } from 'components/LocationPreview';
import { i18n } from 'config/translations';
import styled from 'styled-components/native';
import { CoordinatesType } from 'types';

import { BaseContainer } from '../Containers';
import { KeyData } from '../KeyData';
import { Header2 } from '../Typography';

const Container = styled(BaseContainer)`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.modalBackground};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.View`
  background-color: white;
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
};

export const UserDetailsPopup = ({ email, dateOfBirth, gender, city, coordinates }: PropsType) => {
  return (
    <Container>
      <ContentContainer>
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
