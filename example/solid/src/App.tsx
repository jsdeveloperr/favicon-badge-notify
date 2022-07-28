import { Component, createEffect, createSignal } from 'solid-js';
import { MetaProvider, Link } from '@solidjs/meta';

import logo from './logo.svg';
import useFaviconBadgeNotify from 'favicon-badge-notify';
import faviconSvg from './assets/favicon.svg';
import styles from './App.module.css';

const App: Component = () => {
  const [count, setCount] = createSignal<number>(0);
  const [favicon, setFavicon] = createSignal<string>(faviconSvg);
  const { drawBadge, destroyBadge } = useFaviconBadgeNotify({
    src: faviconSvg
  });

  createEffect(() => {
    drawBadge(count()).then((badge: any) => setFavicon(badge));

    return () => destroyBadge();
  }, [count()]);

  return (
    <div class={styles.App}>
      <MetaProvider>
        <Link rel="icon" type="image/png" sizes="128x128" href={favicon()} />
      </MetaProvider>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer">
          Learn Solid
        </a>
        <p class={styles.buttons}>
          <button type="button" class={styles.increase} onClick={() => setCount(count() + 1)}>
            increase
          </button>
          <span>{count}</span>
          <button
            type="button"
            class={styles.decrease}
            onClick={() => count() - 1 >= 0 && setCount(count() - 1)}>
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
};

export default App;
