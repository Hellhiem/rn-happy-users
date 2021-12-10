import { formatUserDateOfBirth } from '..';

describe('dateHelpers', () => {
  it('should format date correctly ex. Day(01).Month(12).Year(2019)', () => {
    const expectedResult = '23.05.1970';

    expect(formatUserDateOfBirth('1970-05-23T10:26:02.973Z')).toBe(expectedResult);
  });
});
