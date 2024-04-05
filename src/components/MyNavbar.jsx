import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Offcanvas from "react-bootstrap/Offcanvas";
// import { Link } from "react-router-dom";

const MyNavbar = () => {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (
    <Navbar expand="md" bg="black" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src={"logo.jpeg"} alt="logo-brand" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link href="#home" className="text ">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="text ">
              Blog
            </Nav.Link>
            <Nav.Link href="#home" className="text ">
              Services
            </Nav.Link>
            <Nav.Link href="#link" className="text ">
              Contact
            </Nav.Link>
            <Nav.Link href="#link" className="text ">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <Container fluid>
    //   <Row className="bg-black justify-content-center  ">
    //     <Col xs={12}>
    //       <h1 className="text py-5 ">...La mia page...</h1>
    //     </Col>
    //   </Row>
    // </Container>

    // <>
    //   <Button variant="trasparent" onClick={handleShow}>
    //     Launch
    //   </Button>

    //   <Offcanvas show={show} onHide={handleClose} className="bg-black">
    //     <Offcanvas.Header closeButton>
    //       <Offcanvas.Title>
    //         <img src={"logo.jpeg"} alt="logo-brand" className="logo" />
    //       </Offcanvas.Title>
    //     </Offcanvas.Header>
    //     <Offcanvas.Body>
    //       <Link to="" className="text d-block ">
    //         Home
    //       </Link>

    //       <Link to="" className="text d-block ">
    //         Blog
    //       </Link>

    //       <Link to="" className="text d-block">
    //         Services
    //       </Link>

    //       <Link to="" className="text d-block">
    //         Contact
    //       </Link>

    //       <Link to="" className="text d-block">
    //         About
    //       </Link>
    //     </Offcanvas.Body>
    //   </Offcanvas>
    // </>
  );
};

export default MyNavbar;
