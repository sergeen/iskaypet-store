/* TODO: Don't like MainStyles for name */
import MainContentStyles from './MainContent.module.css';

function MainContent({children}) {
  return (
    <main class={MainContentStyles['main-content']}>
      {children}
    </main>
  )
}

export default MainContent;