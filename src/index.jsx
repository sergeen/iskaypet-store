import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import { Show } from 'solid-js';

import styles from './App.module.css';

import {
  Layout,
} from './components';

import {
  BestFriends,
  Communications,
  Returns,
  Tasks,
  UserData,
} from './scenes';

const App = (props) =>(
  <Layout>
    {props.children}
  </Layout>
)

render(
  () => (
    <Router root={App}>
      <Route path="/user-data" component={UserData} />
      <Route path="/tasks" component={Tasks} />
      <Route path="/returns" component={Returns} />
      <Route path="/communications" component={Communications} />
      <Route path="/best-friends" component={BestFriends} />
    </Router>
  ),
  document.getElementById("root")
);