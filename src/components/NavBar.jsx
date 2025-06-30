import { A } from "@solidjs/router";
import { locales } from "../locales";
import NavBarStyles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav class={NavBarStyles['nav-bar']}>
      <A
        href="/user-data"
        class={`${NavBarStyles['nav-bar__item']}`}
        activeClass={NavBarStyles['nav-bar__item--active']}
        end={true} // Ensures this link is only active for the exact path
      >
        {locales.myDataNav}
      </A>
      <A
        href="/tasks"
        class={`${NavBarStyles['nav-bar__item']}`}
        activeClass={NavBarStyles['nav-bar__item--active']}
      >
        {locales.myTasksNav}
      </A>
      <A
        href="/returns"
        class={`${NavBarStyles['nav-bar__item']}`}
        activeClass={NavBarStyles['nav-bar__item--active']}
      >
        {locales.myReturnsNav}
      </A>
      <A
        href="/communications"
        class={`${NavBarStyles['nav-bar__item']}`}
        activeClass={NavBarStyles['nav-bar__item--active']}
      >
        {locales.myCommunicationsNav}
      </A>
      <A
        href="/best-friends"
        class={`${NavBarStyles['nav-bar__item']}`}
        activeClass={NavBarStyles['nav-bar__item--active']}
      >
        {locales.myBestFriendsNav}
      </A>
    </nav>
  )
}

export default NavBar;