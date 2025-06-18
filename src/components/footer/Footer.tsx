import { Navbar, Container } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary footer-container"
      fixed="bottom"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="#">Task Manager App</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Footer;
