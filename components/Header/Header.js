import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import styles from "../../styles/Header.module.css";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">JustR-Pokémon Next.js</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink href="csr" className={styles.headerNavlink}>
              Pokémon(CSR)
            </NavLink>

            <NavLink className={styles.headerNavlink} href="/ssr">
              Mis pokémon SSR
            </NavLink>

            <NavLink className={styles.headerNavlink} href="/ssg">
              Mis pokémon SSG
            </NavLink>

            <NavLink className={styles.headerNavlink} href="/isr">
              Mis pokémon ISR
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
