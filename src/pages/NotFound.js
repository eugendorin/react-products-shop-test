import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ROUTES from "routes";

export function NotFound() {
  return (
    <div className="navbar-pt">
      <Container className="py-3">
        <Card className="w-100 rounded-full border-0">
          <h3>Page not found</h3>

          <p>
            Go back to <Link to={ROUTES.root}>shopping</Link>
          </p>
        </Card>
      </Container>
    </div>
  );
}
