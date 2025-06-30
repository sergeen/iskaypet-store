import { Show } from 'solid-js';

import styles from './App.module.css';

import {
  Form,
  Header,
  MainContent,
  Modal,
  NavBar,
} from './components';

import {
  BestFriends,
  Communications,
  Returns,
  Tasks,
  UserData,
} from './scenes';

function App() {
  // TODO: por ahora hacer un Lifthing up del estado es suficiente.

  return (
    <div class={styles.layout}>
      <Show when={false}>
        <Modal>
          <Form type={'task'}></Form>
        </Modal>
      </Show>
      <Header />
      <NavBar />
      <MainContent>
        <UserData />
      </MainContent>
    </div>
  );
}

export default App;

/*
  entonces necesito que el form tenga los estilos de la misma forma que el modal
  entonces tengo que tener
*/