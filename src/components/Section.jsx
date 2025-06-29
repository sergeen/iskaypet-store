import PanelStyles from './Section.module.css';
import { locales } from '../locales';

function Section() {
  return (
    <section class={PanelStyles['section']}>
      <h1>{locales.myDataTitle}</h1>
      <div>
        Form placeholder
      </div>
    </section>
  )
}

export default Section;