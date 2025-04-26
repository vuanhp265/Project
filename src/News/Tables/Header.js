import  Container from "react-bootstrap/Container";
import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
function Header(){
    return <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand> 
                <h1>My Ielts</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
            <Navbar.Collapse className="d-flex justify-content-center" id ='basic-navbar-nav'>
                <Nav >
                    <NavLink to="/home" style={{textDecoration:"none",color:"black"}} className=" m-2">Opening date</NavLink>
                    <NavLink to="/order"style={{textDecoration:"none",color:"black"}} className="m-2">Recruitment</NavLink>
                </Nav>
            </Navbar.Collapse>
            <div class="d-flex justify-content-end m-2">
                        <button type="submit" className="btn btn-warning m-2" > Logins</button>
                        <button type="submit" className="btn btn-outline-primary m-2" >Cancel</button>
                    </div>
        </Container>
    </Navbar>
}
export default Header;
