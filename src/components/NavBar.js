import { useState, useEffect } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import logo from '../assets/img/PP circular.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onscroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toogler-icon" />
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Inicio</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink('project')}>Actividades</Nav.Link>
                        <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink('skills')}>Proyectos</Nav.Link>
                        <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink('contact')}>Contacto</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin" target="_blank"><img src={navIcon1} alt="" /></a>
                            <a href="https://www.facebook.com/yayo.junco" target="_blank"><img src={navIcon2} alt="" /></a>
                            <a href="https://www.instagram.com/yayo.junco" target="_blank"><img src={navIcon3} alt="" /></a>
                        </div>
                        <form action="https://forms.gle/cMHE8fsymq6rKnC36" method="get" target="_blank">
                            <button className="vvd">A Evaluarse</button>
                        </form>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}