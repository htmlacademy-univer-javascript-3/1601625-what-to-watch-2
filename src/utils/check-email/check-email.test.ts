import { checkEmail } from './check-email';

describe('Function: checkEmail', () => {
  it('should return true if email is correct', () => {
    expect(checkEmail('ivanov@gmail.com')).toBe(true);
    expect(checkEmail('ivanov_557@ya.ru')).toBe(true);
    expect(checkEmail('_21ivanov@gmail.com')).toBe(true);
  });

  it('should return false if email is incorrect', () => {
    expect(checkEmail('ivanov@.com')).toBe(false);
    expect(checkEmail('ivanov@ya')).toBe(false);
    expect(checkEmail('ivanov.com')).toBe(false);
    expect(checkEmail('ivanov@')).toBe(false);
    expect(checkEmail('88ivanov@.com')).toBe(false);
  });
});

