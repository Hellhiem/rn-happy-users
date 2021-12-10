import React from 'react';

import styled from 'styled-components/native';

import { SmallBody } from '../Typography';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Key = styled(SmallBody)`
  font-weight: bold;
`;

const Value = styled(SmallBody)`
  margin-left: 4px;
  font-weight: normal;
`;

type PropsType = {
  dataKey: string;
  value: string;
};

export const KeyData = ({ dataKey, value }: PropsType) => {
  return (
    <Container>
      <Key>{`${dataKey}:`}</Key>
      <Value>{value}</Value>
    </Container>
  );
};
