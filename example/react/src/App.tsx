import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import logo from './logo.svg';
import './App.css';
import useFaviconBadgeNotify from 'favicon-badge-notify';
import faviconSvg from './assets/favicon.svg';

function App() {
  const [count, setCount] = useState(0);
  const [favicon, setFavicon] = useState(faviconSvg);
  const { drawBadge, destroyBadge } = useFaviconBadgeNotify({
    src: faviconSvg,
    badgeValue: count
  });

  useEffect(() => {
    drawBadge().then((badge: string) => setFavicon(badge));

    return () => destroyBadge();
  }, [count]);

  return (
    <div className="App">
      <Helmet>
        <link rel="icon" type="image/png" sizes="128x128" href={favicon}></link>
      </Helmet>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>To send notifications to your browser tab, increase the number.</p>
        <p className="buttons">
          <button type="button" className="increase" onClick={() => setCount((count) => count + 1)}>
            increase
          </button>
          <span>{count}</span>
          <button
            type="button"
            className="decrease"
            onClick={() => count - 1 >= 0 && setCount((count) => count - 1)}>
            decrease
          </button>
        </p>
      </header>
      <footer>
        <p>
          🍁 MIT Licensed | Copyright © 2022-present Abdulnasır Olcan and @favicon-badge-notify
          contributors
        </p>
      </footer>
    </div>
  );
}

export default App;
