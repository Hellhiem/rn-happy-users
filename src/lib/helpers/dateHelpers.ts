import { format } from 'date-fns';

export const formatUserDateOfBirth = (date: string) => {
  return format(new Date(date), 'dd.MM.yyyy');
};
