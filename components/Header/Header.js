import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import styles from "../../styles/Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">JustR-Pokémon Next.js</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link href="/csr" passHref>
              <NavLink className={styles.headerLink}>Pokémon (CSR)</NavLink>
            </Link>
            <Link href="/ssr" passHref>
              <NavLink className={styles.headerLink}>Mis pokémon SSR</NavLink>
            </Link>
            <Link href="/ssg" passHref>
              <NavLink className={styles.headerLink}>Mis pokémon SSG</NavLink>
            </Link>
            <Link href="/isr" passHref>
              <NavLink className={styles.headerLink}>Mis pokémon ISR</NavLink>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
