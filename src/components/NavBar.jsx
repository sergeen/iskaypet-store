import { locales } from "../locales";
import NavBarStyles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav class={NavBarStyles['nav-bar']}>
      <button
        type="button"
        class={NavBarStyles['nav-bar__item']}
        classList={{
          [NavBarStyles['nav-bar__item--active']]: true,
        }}
        aria-current="page">
        {locales.myDataNav}
      </button>
      <button
        type="button"
        class={NavBarStyles['nav-bar__item']}>
        {locales.myTasksNav}
      </button>
      <button
        type="button"
        class={NavBarStyles['nav-bar__item']}>
        {locales.myReturnsNav}
      </button>
      <button
        type="button"
        class={NavBarStyles['nav-bar__item']}>
        {locales.myCommunicationsNav}
      </button>
      <button
        type="button"
        class={NavBarStyles['nav-bar__item']}>
        {locales.myBestFriendsNav}
      </button>
    </nav>
  )
}

export default NavBar;