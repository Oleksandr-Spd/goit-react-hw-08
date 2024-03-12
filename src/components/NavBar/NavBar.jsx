import { useAuth } from "../../hooks/useAuth";
import { AuthNav } from "../AuthNav/AuthNav";
import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import css from "./NavBar.module.css";

export const NavBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className={css.header}>
      <div className={css.navBox}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};
