import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';

import { i18n } from 'config/translations';
import { triggerPhoneCall } from 'lib/device';
import { shadowBoxStyle } from 'lib/styles';
import styled from 'styled-components/native';

import { AccentContainer } from '../Containers';
import { SmallBody } from '../Typography';

const Container = styled(AccentContainer)`
  padding: 16px;
  flex-direction: row;
  shadow-color: ${({ theme }) => theme.colors.shadow};
  border-radius: 8px;
  margin-horizontal: 16px;
`;

const UserImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

const UserName = styled(SmallBody)`
  font-weight: bold;
  text-align: left;
`;

const PhoneNumberLabel = styled(SmallBody)`
  font-weight: bold;
`;
const PhoneNumber = styled(SmallBody)`
  font-weight: normal;
  margin-left: 8px;
`;

const RightInfoContainer = styled.View`
  margin-left: 16px;
  justify-content: center;
  flex: 1;
`;
const PhoneNumberContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

type PropsType = {
  userImageUrl: string;
  userName: string;
  phoneNumber: string;
};

const baseTranslationPath = 'Components:UserTile:';

export const UserTile = memo(({ userImageUrl, userName, phoneNumber }: PropsType) => {
  return (
    <Container style={shadowBoxStyle}>
      <UserImage source={{ uri: userImageUrl }} />
      <RightInfoContainer>
        <UserName>{userName}</UserName>
        <PhoneNumberContainer>
          <PhoneNumberLabel>{i18n.t(`${baseTranslationPath}phoneNumber`)}</PhoneNumberLabel>
          <TouchableOpacity onPress={() => triggerPhoneCall(phoneNumber)}>
            <PhoneNumber numberOfLines={1}>{phoneNumber}</PhoneNumber>
          </TouchableOpacity>
        </PhoneNumberContainer>
      </RightInfoContainer>
    </Container>
  );
});
