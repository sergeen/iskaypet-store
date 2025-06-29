import styles from './App.module.css';
import Header from './components/Header.jsx';
import NavBar from './components/NavBar.jsx';
import Modal from './components/Modal.jsx';
import Section from './components/Section.jsx';

function App() {
  return (
    <div class={styles.layout}>
      <Modal />
      <Header />
      <NavBar />
      <main>
        <Section />
      </main>
    </div>
  );
}

export default App;