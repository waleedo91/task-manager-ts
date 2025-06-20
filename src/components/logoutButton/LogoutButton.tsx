import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

export default function LogoutButton() {
  const { logout } = useAuth0();

  return (
    <Button
      variant="danger"
      onClick={() =>
        logout({
          logoutParams: {
            returnTo: window.location.origin,
          },
        })
      }
    >
      Logout
    </Button>
  );
}
