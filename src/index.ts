import { useState, useEffect } from 'react';
import RssParser from 'rss-parser';

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
