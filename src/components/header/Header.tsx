import { Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../loginButton/LoginButton";
import LogoutButton from "../logoutButton/LogoutButton";
import "./Header.css";

const Header = () => {
  const { isAuthenticated, user, isLoading } = useAuth0();
  return (
    <Navbar
      className="bg-body-tertiary navbar-container"
      data-bs-theme="dark"
      fixed="top"
    >
      <Container>
        <Link to="/" className="site-title">
          <Navbar.Brand className="brand-name">Task Manager App</Navbar.Brand>
        </Link>
        {isAuthenticated && (
          <Link to="/new-task">
            <Button>Create New Task</Button>
          </Link>
        )}

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {isLoading ? (
            <Navbar.Text>Loading...</Navbar.Text>
          ) : isAuthenticated ? (
            <>
              <Navbar.Text className="user-greeting">
                Hello, <strong>{user?.name}!</strong>
              </Navbar.Text>
              <LogoutButton />
            </>
          ) : (
            <LoginButton />
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
