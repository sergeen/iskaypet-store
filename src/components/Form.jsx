import FormStyles from './Form.module.css';
import { locales } from '../locales';
import ButtonStyles from './Buttons.module.css';

function Form() {
  return (
    <form className={FormStyles['form']}>
      <label htmlFor="name">{locales.name}</label>
      <input type="text" id="name" name="name" placeholder={locales.name} />

      <label htmlFor="email">{locales.email}</label>
      <input type="email" id="email" name="email" placeholder={locales.email} />

      <label htmlFor="phone">{locales.phoneNumber}</label>
      <input type="tel" id="phone" name="phone" placeholder={locales.phoneNumber} />

      <input
        type="submit"
        value="Submit"
        class={`${ButtonStyles.button} ${ButtonStyles.button__primary}`} />
    </form>
  );
};

export default Form;
