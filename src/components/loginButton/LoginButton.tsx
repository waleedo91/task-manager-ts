import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return <Button onClick={() => loginWithRedirect()}>Login</Button>;
}
