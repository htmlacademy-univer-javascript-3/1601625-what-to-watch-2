
import { redirectProcess } from './redirect-process';
import { setPagePath } from './redirect-process';

describe('RedirectProcess slice', () => {
  const emptyAction = { type: '' };
  const pagePath = '/films/1';

  it('should return initial state with empty action', () => {
    const expectedState = { pagePath: pagePath};
    const result = redirectProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefind state', () => {
    const expectedState = { pagePath: '' };
    const result = redirectProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should update "pagePath" in state with "setPagePath" action', () => {
    const initialState = { pagePath: '' };
    const expectedState = { pagePath: pagePath };
    const result = redirectProcess.reducer(initialState, setPagePath(pagePath));

    expect(result).toEqual(expectedState);
  });
});
