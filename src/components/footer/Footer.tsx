import { Navbar, Container } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      fixed="bottom"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Footer;
