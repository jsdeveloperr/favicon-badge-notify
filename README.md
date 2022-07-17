# :boom: Favicon Badge Notify

<p>Custom function adds a favicon and a badge</p>

<div align="center">

[![npm](https://img.shields.io/npm/v/favicon-badge-notify?style=flat-square)](https://www.npmjs.com/package/favicon-badge-notify)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/favicon-badge-notify?style=flat-square)
![npm](https://img.shields.io/npm/dt/favicon-badge-notify?style=flat-square)
![GitHub license](https://img.shields.io/npm/l/favicon-badge-notify?style=flat-square)

</div>

## :books: Introduction

Favicon Badge Notify implemented as custom function.

## :rocket: Example

Check our [example](https://react-favicon-badge.vercel.app/)

## :package: Installation

```bash
# install with yarn
yarn add favicon-badge-notify
# install with npm
npm install favicon-badge-notify
```

## :sparkles: Reactjs example

```js
import { useState, useEffect } from 'react'
import { Helmet } from "react-helmet"

import useFaviconBadgeNotify from 'favicon-badge-notify'
import faviconSvg from "./assets/favicon.svg";

function ReactFaviconBadgeNotify() {
  const [count, setCount] = useState(0)
  const [favicon, setFavicon] = useState(faviconSvg)
  const { drawBadge, destroyBadge } = useFaviconBadgeNotify({
    src: faviconSvg,
    badgeValue: count,
  })

  useEffect(() => {
    drawBadge().then(badge => setFavicon(badge));

    return () => destroyBadge();
  }, [count]);

  return (
    <div className="App">
      <Helmet>
        <link rel="icon" type="image/png" sizes="128x128" href={favicon}></link>
      </Helmet>
      <header className="App-header">
        <p className="buttons">
          <button type="button" className="increase" onClick={() => setCount((count) => count + 1)}>
            increase
          </button>
          <span>{count}</span>
          <button type="button" className="decrease" onClick={() => count - 1 >= 0 && setCount((count) => count - 1)}>
            decrease
          </button>
        </p>
      </header>
    </div>
  )
}

export default ReactFaviconBadgeNotify
```

## License

<div calign="center">
    🍁 MIT Licensed | Copyright © 2022-present Abdulnasır Olcan and @FaviconBadgeNotification contributors
</div>
