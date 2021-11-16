import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
/* import { NavLink } from "react-router-dom"; */
import styles from "../../styles/Header.module.css";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand to="/main">JustR-Pokémon Next.js</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="header-navlink" to="/main">
              Pokémon(CSR)
            </NavLink>

            <NavLink className="header-navlink" to="/SSR">
              Mis pokémon SSR
            </NavLink>

            <NavLink className="header-navlink" to="/SSG">
              Mis pokémon SSG
            </NavLink>

            <NavLink className="header-navlink" to="/ISR">
              Mis pokémon ISR
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
