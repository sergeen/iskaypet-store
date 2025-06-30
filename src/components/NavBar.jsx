import NavBarItem from "./NavBarItem";
import { locales } from "../locales";
import NavBarStyles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav class={NavBarStyles['nav-bar']}>
      <NavBarItem href="/user-data" end>
        {locales.myDataNav}
      </NavBarItem>
      <NavBarItem href="/tasks">
        {locales.myTasksNav}
      </NavBarItem>
      <NavBarItem href="/returns">
        {locales.myReturnsNav}
      </NavBarItem>
      <NavBarItem href="/communications">
        {locales.myCommunicationsNav}
      </NavBarItem>
      <NavBarItem href="/best-friends">
        {locales.myBestFriendsNav}
      </NavBarItem>
    </nav>
  );
}

export default NavBar;
