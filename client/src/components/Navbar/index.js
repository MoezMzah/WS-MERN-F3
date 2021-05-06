import GuestLink from "./GuestLink";
import AuthLink from "./AuthLink"
import {Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useSelector} from "react-redux"
const Navbarr = () => {
  const isAuth = useSelector(state => state.isAuth)
  return (
    <div>
      <Navbar variant="dark" className="bg-primary">
        <Navbar.Brand href="/">
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
            AuthApp
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {isAuth ? <AuthLink /> : <GuestLink />}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navbarr;
