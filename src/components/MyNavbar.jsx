import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";


const MyNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Toggle aria-controls="navbarSupportedContent" />


            <Navbar.Collapse id="navbarSupportedContent">
                <Nav className="mr-auto d-flex align-items-center">
                    <Nav.Item>
                        <Nav.Link href="http://localhost:3000/">
                            <img src="/assets/logo.png" alt="logo netflix" id="logo"/>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="http://localhost:3000/"> Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">TV Shows</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Movies</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#"> Recently Added</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#"> My List</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNavbar;
