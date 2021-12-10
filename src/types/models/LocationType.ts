import { CoordinatesType } from './CoordinatesType';
import { StreetType } from './StreetType';
import { TimezoneType } from './TimezoneType';

export type LocationType = {
  street: StreetType;
  coordinates: CoordinatesType;
  timezone: TimezoneType;
  city: string;
  state: string;
  country: string;
  postcode: number;
};
