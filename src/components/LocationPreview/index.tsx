import React from 'react';

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import styled from 'styled-components/native';
import { CoordinatesType } from 'types';

const GoogleMap = styled(MapView)`
  height: 144px;
  border-radius: 8px;
`;

type PropsType = {
  coordinates: CoordinatesType;
};

export const LocationPreview = ({ coordinates }: PropsType) => {
  const latitude = Number(coordinates.latitude);
  const longitude = Number(coordinates.longitude);

  return (
    <GoogleMap
      provider={PROVIDER_GOOGLE}
      region={{
        latitude,
        longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.0121,
      }}
    >
      <Marker coordinate={{ latitude, longitude }} />
    </GoogleMap>
  );
};
