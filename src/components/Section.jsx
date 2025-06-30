import PanelStyles from './Section.module.css';
import { locales } from '../locales';
import Form from './Form';

function Section() {
  return (
    <section class={PanelStyles['section']}>
      <h1>{locales.myDataTitle}</h1>
      <Form />
    </section>
  )
}

export default Section;