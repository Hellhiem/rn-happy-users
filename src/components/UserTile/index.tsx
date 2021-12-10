import React from 'react';
import { TouchableOpacity } from 'react-native';

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
`;

const UserImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

const UserName = styled(SmallBody)`
  font-weight: bold;
`;

const PhoneNumberLabel = styled(SmallBody)`
  font-weight: bold;
`;
const PhoneNumber = styled(SmallBody)`
  font-weight: normal;
  margin-top: 4px;
  margin-left: 8px;
`;

const RightInfoContainer = styled.View`
  margin-left: 16px;
  justify-content: center;
  flex: 1;
`;

type PropsType = {
  userImageUrl: string;
  userName: string;
  phoneNumber: string;
};

export const UserTile = ({ userImageUrl, userName, phoneNumber }: PropsType) => {
  return (
    <Container style={shadowBoxStyle}>
      <UserImage source={{ uri: userImageUrl }} />
      <RightInfoContainer>
        <UserName>{userName}</UserName>
        <PhoneNumberLabel>
          Phone Number:
          <TouchableOpacity onPress={() => triggerPhoneCall(phoneNumber)}>
            <PhoneNumber numberOfLines={1}>{phoneNumber}</PhoneNumber>
          </TouchableOpacity>
        </PhoneNumberLabel>
      </RightInfoContainer>
    </Container>
  );
};
