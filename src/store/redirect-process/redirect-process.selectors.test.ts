import { SliceNameSpace } from '../../consts';
import { getPagePath } from './selectors';

describe('RedirectProcess selectors', () => {
  const state = {
    [SliceNameSpace.Redirect]: {
      pagePath: '/films/1',
    },
  };

  it('should return page path from state', () => {
    expect(getPagePath(state)).toEqual('/films/1');
  });
});
