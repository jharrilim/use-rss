# useRss Hook

![npm (scoped)](https://img.shields.io/npm/v/@jharrilim/use-rss?style=flat-square)
![npm](https://img.shields.io/npm/dt/@jharrilim/use-rss?style=flat-square)
![Node.js CI](https://github.com/jharrilim/use-rss/workflows/Node.js%20CI/badge.svg)

React hook for RSS feeds.

## Install

```sh
npm i @jharrilim/use-rss
```

## Usage

[![Edit use-rss-demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/use-rss-demo-2eqdg?fontsize=14&hidenavigation=1&theme=dark)

```tsx
import React from 'react';
import useRss from '@jharrilim/use-rss';

export const MyApp = () => {
  const redditFeed = useRss('https://reddit.com/.rss');
  if (redditFeed === null)
    return <h1>Loading...</h1>;
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