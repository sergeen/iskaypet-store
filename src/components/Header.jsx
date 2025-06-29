import { locales } from '../locales.js';
import headerStyles from './Header.module.css';
import buttonStyles from './Buttons.module.css';


function Header() {
  return (
    <header class={headerStyles['header']}>
      <div class={headerStyles['header__section']}>
        <button
          type="button"
          aria-label={locales.menuButtonLabel}
          class={buttonStyles['button-menu']}
        >
          <img
            src="/icons/icon-menu.svg"
            alt="" />
          <p>{locales.menuText}</p>
        </button>
        <button
          type="button"
          aria-label={locales.searchButtonLabel}
          class={buttonStyles['button-search']}
        >
          <img
            src="/icons/icon-search.svg"
            alt="" />
        </button>
      </div>
      <div
        class={headerStyles['header__section']}
      >
        <img
          src="/logo-tiendanimal.svg"
          alt={locales.logoAlt} />
      </div>
      <div class={headerStyles['header__section']}>
        <button
          type="button"
          aria-label={locales.profileButtonLabel}
          class={buttonStyles['user']}
        >
          <img
            src="/icons/icon-user.svg"
            alt="" />
        </button>
        <button
          type="button"
          aria-label={locales.cartButtonLabel}
          class={buttonStyles['button-cart']}
        >
          <img
            src="/icons/icon-cart.svg"
            alt="" />
          <span class={buttonStyles['button-cart__counter']}>
            {() => 2}
          </span>
        </button>
      </div>
    </header>
  )
}

export default Header;