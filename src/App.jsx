import { Route } from "@solidjs/router";
import { Show } from 'solid-js';

import styles from './App.module.css';

import {
  Form,
  Header,
  Layout,
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

  return (
    <Layout>
      <Show when={false}>
        <Modal>
          <Form type={'task'}></Form>
        </Modal>
      </Show>
      <Header />
      <NavBar />
      <MainContent>
        {/* Default route and explicit route */}
        <Route path="/" component={UserData} />
        <Route path="/user-data" component={UserData} />
        <Route path="/tasks" component={Tasks} />
        <Route path="/returns" component={Returns} />
        <Route path="/communications" component={Communications} />
        <Route path="/best-friends" component={BestFriends} />
      </MainContent>
    </Layout>
  );
}

export default App;

/*
  entonces necesito que el form tenga los estilos de la misma forma que el modal
  entonces tengo que tener
*/