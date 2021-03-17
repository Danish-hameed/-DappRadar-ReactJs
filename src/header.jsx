import { Navbar, Nav, } from "react-bootstrap";
import { Link } from "react-router-dom";
function Header(props) {
    const redirectToUrl = (url) => {
        props.history.push(url)
    }
    return (
        <header>
            <div className=" main-page-header">
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand onClick={() => redirectToUrl('/')} ><img className="img-fluid" src={require("./assets/images/logo.png").default} alt="icon" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link to="/">Home</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </header>
    );
}

export default Header;
