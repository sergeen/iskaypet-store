import styles from './App.module.css';
import { locales } from './locales.js';

function App() {
  return (
    <div class={styles.layout}>
      <div
        class={styles.modal}
        role="dialog" aria-hidden="true"></div>
      <header class={styles['top-bar']}>
        <div class={styles['top-bar__section']}>
          <button
            type="button"
            aria-label={locales.menuButtonLabel}
            class={styles['button-menu']}
          >
            <img
              src="/icons/icon-menu.svg"
              alt="" />
            <p>{locales.menuText}</p>
          </button>
          <button
            type="button"
            aria-label={locales.searchButtonLabel}
            class={styles['button-search']}
          >
            <img
              src="/icons/icon-search.svg"
              alt="" />
          </button>
        </div>
        <div
          class={styles['top-bar__section']}
        >
          <img
            src="/logo-tiendanimal.svg"
            alt={locales.logoAlt} />
        </div>
        <div class={styles['top-bar__section']}>
          <button
            type="button"
            aria-label={locales.profileButtonLabel}
            class={styles['user']}
          >
            <img
              src="/icons/icon-user.svg"
              alt="" />
          </button>
          <button
            type="button"
            aria-label={locales.cartButtonLabel}
            class={styles['button-cart']}
          >
            <img
              src="/icons/icon-cart.svg"
              alt="" />
            <span class={styles['button-cart__counter']}>
              {() => 2}
            </span>
          </button>
        </div>
      </header>
      <nav class={styles['nav-bar']}>
        <button
          type="button"
          class={styles['nav-bar__item']}
          classList={{
            [styles['nav-bar__item--active']]: true,
          }}
          aria-current="page">
          {locales.myDataNav}
        </button>
        <button
          type="button"
          class={styles['nav-bar__item']}>
          {locales.myTasksNav}
        </button>
        <button
          type="button"
          class={styles['nav-bar__item']}>
          {locales.myReturnsNav}
        </button>
        <button
          type="button"
          class={styles['nav-bar__item']}>
          {locales.myCommunicationsNav}
        </button>
        <button
          type="button"
          class={styles['nav-bar__item']}>
          {locales.myBestFriendsNav}
        </button>
      </nav>
      <main>
        <section class={styles.panel}>
          <h1>{locales.myDataTitle}</h1>
          <div>
            Form placeholder
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;