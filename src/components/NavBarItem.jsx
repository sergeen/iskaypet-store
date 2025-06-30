import { A } from "@solidjs/router";
import NavBarStyles from "./NavBar.module.css";

function NavBarItem({ href, end, children }) {
  return (
    <A
      href={href}
      class={NavBarStyles['nav-bar__item']}
      activeClass={NavBarStyles['nav-bar__item--active']}
      end={end}
    >
      {children}
    </A>
  );
}
export default NavBarItem;
