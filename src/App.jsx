import { Show } from 'solid-js';

import styles from './App.module.css';

import Form from './components/Form.jsx';
import Header from './components/Header.jsx';
import Modal from './components/Modal.jsx';
import NavBar from './components/NavBar.jsx';
import Section from './components/Section.jsx';


function App() {
  return (
    <div class={styles.layout}>
      <Show when={false}>
        <Modal>
          <Form type={'task'}></Form>
        </Modal>
      </Show>
      <Header />
      <NavBar />
      <main>
        <Section />
      </main>
    </div>
  );
}

export default App;