import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";
import Logo from "../../assets/images/logo-domina.png";

export const NavbarComponent = () => {
  return (
    <Navbar className="navbar">
      <NavbarBrand>
        <img src={Logo} alt="ACME" className="h-8" />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="navbar__link" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link className="navbar__link" aria-current="page" href="/useeffect">
            useEffect
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="navbar__link" href="/buttonmessage">
            buttonmessage
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end"></NavbarContent>
    </Navbar>
  );
};
