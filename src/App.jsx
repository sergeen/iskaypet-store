import styles from './App.module.css';

function App() {
  return (
    <div class={styles.app}>
      <div class={styles.modal} role="dialog" aria-hidden="true"></div>
      <header class={styles['top-bar']}>
        <div class={styles['top-bar__section']}>
          <button
            type="button"
            aria-label="Open site menu"
            class={styles.menu}
          >
            <img src="/icons/icon-menu.svg" alt="" />
          </button>
          <button
            type="button"
            aria-label="Search Tienanimal store"
            class={styles.search}
          >
            <img src="/icons/icon-search.svg" alt="" />
          </button>
        </div>
        <div class={styles['top-bar__section']}>
          <a href="/" class={styles.brand} aria-label="Tiendanimal home">
            <img src="/logo-tiendanimal.svg" alt="Tiendanimal" />
          </a>
        </div>
        <div class={styles['top-bar__section']}>
          <button
            type="button"
            aria-label="Your profile"
            class={styles.user}
          >
            <img src="/icons/icon-user.svg" alt="" />
          </button>
          <button
            type="button"
            aria-label="Shopping cart, 2 items"
            class={styles.cart}
          >
            <img src="/icons/icon-cart.svg" alt="" />
            <span class={styles['cart__counter']} aria-label="2 items in cart">2</span>
          </button>
        </div>
      </header>
      <nav class={styles['nav-bar']} aria-label="User account navigation">
        <button
          type="button"
          class={styles['nav-bar__item']}
          classList={{
            [styles['nav-bar__item--active']]: true,
          }}
          aria-current="page">
          Mis datos
        </button>
        <button type="button" class={styles['nav-bar__item']}>
          Mis tareas
        </button>
        <button type="button" class={styles['nav-bar__item']}>
          Mis devoluciones
        </button>
        <button type="button" class={styles['nav-bar__item']}>
          Mis comunicaciones
        </button>
        <button type="button" class={styles['nav-bar__item']}>
          Mis mejores amigos
        </button>
      </nav>
      <main>
        <section class={styles.panel}>
          <h1>Mis datos</h1>
          <div>
            Form
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;