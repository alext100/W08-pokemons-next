import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import styles from "../../styles/Header.module.css";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand to="/main">JustR-Pokémon Next.js</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className={styles.headerNavlink} to="/CSR">
              Pokémon(CSR)
            </NavLink>

            <NavLink className={styles.headerNavlink} to="/SSR">
              Mis pokémon SSR
            </NavLink>

            <NavLink className={styles.headerNavlink} to="/SSG">
              Mis pokémon SSG
            </NavLink>

            <NavLink className={styles.headerNavlink} to="/ISR">
              Mis pokémon ISR
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
