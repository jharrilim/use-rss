# useRss Hook

React hook for RSS feeds.

## Usage

```tsx
import React from 'react';
import useRss from '@jharrilim/use-rss';

export const MyApp = () => {
  const redditFeed = useRss('https://reddit.com/.rss');

  return (
    <div>
      <h1>{redditFeed?.title}</h1>
      <p>{redditFeed?.description}</p>
      {redditFeed?.items.map((item, i) => (
        <div key={item?.title ?? i}>
          <h2>{item?.title}</h2>
          <h3>{item?.creator} - {item?.pubDate}</h3>
          <p>{item?.content}</p>
        </div>
      ))}
    </div>
  );
}
```