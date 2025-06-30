import LayoutStyles from './Layout.module.css';

import {
  Form,
  Header,
  MainContent,
  Modal,
  NavBar,
} from './';

function Layout({ children }) {
  return (
    <div class={LayoutStyles['layout']}>
      <Show when={false}>
        <Modal>
          <Form type={'task'}></Form>
        </Modal>
      </Show>
      <Header />
      <NavBar />
      <MainContent>
        {children}
      </MainContent>
    </div>
  )
}

export default Layout;