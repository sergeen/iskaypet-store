import styles from './App.module.css';

function App() {
  return (
    <div class={styles.app}>
      <div class={styles.modal}></div>
      <div class={styles.topBar}>
        <div class={styles.menu}></div>
        <div class={styles.search}></div>
        <div class={styles.brand}></div>
        <div class={styles.user}></div>
        <div class={styles.cart}></div>
      </div>
      <div class={styles.navBar}>
        <div class={styles.navBarItem}></div>
        <div class={styles.navBarItem}></div>
        <div class={styles.navBarItem}></div>
        <div class={styles.navBarItem}></div>
        <div class={styles.navBarItem}></div>
      </div>
      <main>
        <div class={styles.panel}></div>
      </main>
    </div>
  );
}

export default App;