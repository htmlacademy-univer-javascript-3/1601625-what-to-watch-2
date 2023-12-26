import { changeDateFormat } from './changeDateFormat';

describe('Function: changeDateFormat', () => {
  it('should return data in format: Full month day, year', () => {
    expect(changeDateFormat('2023-12-03T21:00:00.315Z')).toBe('December 4, 2023');
  });
});
