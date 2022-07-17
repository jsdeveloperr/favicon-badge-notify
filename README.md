# :boom: Favicon Badge Notification

<p>Custom function adds a favicon and a badge</p>

<div align="center">

[![npm](https://img.shields.io/npm/v/favicon-badge-notification?style=flat-square)](https://www.npmjs.com/package/favicon-badge-notification)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/favicon-badge-notification?style=flat-square)
![npm](https://img.shields.io/npm/dt/favicon-badge-notification?style=flat-square)
![GitHub license](https://img.shields.io/npm/l/favicon-badge-notification?style=flat-square)

</div>

## :books: Introduction

Favicon Badge Notification implemented as custom function.

## :rocket: Example

Check our [example](https://favicon-badge-notification.vercel.app/)

## :package: Installation

```bash
# install with yarn
yarn add favicon-badge-notification
# install with npm
npm install favicon-badge-notification
```

## :sparkles: Reactjs example

```js
import { useState, useEffect } from 'react'
import { Helmet } from "react-helmet"

import useFaviconBadge from 'favicon-badge-notification'
import faviconSvg from "./assets/favicon.svg";

function ReactFaviconBadge() {
  const [count, setCount] = useState(0)
  const [favicon, setFavicon] = useState(faviconSvg)
  const { drawBadge, destroyBadge } = useFaviconBadge({
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

export default ReactFaviconBadge
```

## License

<div calign="center">
    🍁 MIT Licensed | Copyright © 2022-present Abdulnasır Olcan and @FaviconBadgeNotification contributors
</div>
