import FormStyles from './Form.module.css';
import { locales } from '../locales';
import ButtonStyles from './Buttons.module.css';
import { Show } from 'solid-js';

function Form({ type }) {
  return (
    <form className={FormStyles['form']}>
      <label htmlFor="name">{locales.name}</label>
      <input type="text" id="name" name="name" placeholder={locales.name} />
      <Show when={type === 'task'}>
        <label htmlFor="name">{locales.description}</label>
        <textarea name="message" rows="6" cols="50"></textarea>
      </Show>
      <Show when={type !== 'task'} >
        <label htmlFor="email">{locales.email}</label>
        <input type="email" id="email" name="email" placeholder={locales.email} />

        <label htmlFor="phone">{locales.phoneNumber}</label>
        <input type="tel" id="phone" name="phone" placeholder={locales.phoneNumber} />
      </Show>
      <div classList={{
        [ButtonStyles['buttons-container']]: true,
        [ButtonStyles['buttons-container__double']]: type === 'task',
      }}>
        <Show when={type === 'task'}>
          <button class={ButtonStyles['button__secondary']}>
            Cancel
          </button>
        </Show>
        <input
          type="submit"
          value="Submit"
          class={`${ButtonStyles.button} ${ButtonStyles.button__primary}`} />
      </div>
    </form>
  );
};

export default Form;
