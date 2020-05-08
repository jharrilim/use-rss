import { useState, useEffect } from 'react';
import RssParser from 'rss-parser';

/**
 * This function can be used to retrieve an RSS Feed within React function components
 * {@link https://reactjs.org/docs/hooks-intro.html as a hook}.
 * 
 * @param {string} url The URL of the rss/atom feed.
 * @param {RssParser.ParserOptions} opts Options for the underlying RssParser
 * @see {@link https://www.npmjs.com/package/rss-parser rss-parser}
 */
export const useRss = (url: string, opts?: RssParser.ParserOptions) => {
  const rss = new RssParser(opts);
  const [rssOutput, setRssOutput] = useState<RssParser.Output | null>(null);
  useEffect(() => {
    rss.parseURL(url).then(output => {
      setRssOutput(output);
    });
  }, []);

  return rssOutput;
};

export default useRss;
