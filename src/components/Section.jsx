import SectionStyles from './Section.module.css';
import { locales } from '../locales';

function Section({ children }) {
  return (
    <section class={SectionStyles['section']}>
      <h1>{locales.myDataTitle}</h1>
      <div class={SectionStyles['section-content']}>
        {children}
      </div>
    </section>
  )
}

export default Section;