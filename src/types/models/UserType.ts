import { DOBType } from './DOBType';
import { IdType } from './IDType';
import { LocationType } from './LocationType';
import { LoginType } from './LoginType';
import { PictureType } from './PictureType';
import { RegisteredType } from './RegisteredType';
import { UserNameType } from './UserNameType';

export type UserType = {
  gender: string;
  name: UserNameType;
  location: LocationType;
  email: string;
  login: LoginType;
  dob: DOBType;
  registered: RegisteredType;
  phone: string;
  cell: string;
  id: IdType;
  picture: PictureType;
  nat: string;
};
