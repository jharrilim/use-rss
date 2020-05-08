import { renderHook } from '@testing-library/react-hooks';
import useRss from '../src';

describe('Hook', () => {
  it('do', async () => {
    const { waitForNextUpdate, result } = renderHook(() => useRss('https://reddit.com/.rss'));
    await waitForNextUpdate();
    expect(result.error).toBeUndefined();
    expect(result.current).toBeDefined();
  });
})