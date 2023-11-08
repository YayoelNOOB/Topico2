import { Container, Row, Tab, Col, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/ARQUETIPO1.jpg";
import projImg2 from "../assets/img/ARQUETIPO2.jpg";
import projImg3 from "../assets/img/ARQUETIPO3.jpg";
import projImg4 from "../assets/img/ARQUETIPO4.jpg";
import projImg5 from "../assets/img/ARQUETIPO5.jpg";
import projImg6 from "../assets/img/ARQUETIPO6.jpg";
import projImg7 from "../assets/img/cubos.png";
import projImg8 from "../assets/img/skate.png";
import projImg9 from "../assets/img/games.png";
import projImg10 from "../assets/img/info.png";
import projImg11 from "../assets/img/programar.png";
import projImg12 from "../assets/img/spider.png";
import projImg13 from "../assets/img/deca1.png";
import projImg14 from "../assets/img/deca2.png";
import projImg15 from "../assets/img/deca3.png";
import projImg16 from "../assets/img/deca4.png";
import projImg17 from "../assets/img/deca5.png";
import projImg18 from "../assets/img/deca6.png";
import projImg19 from "../assets/img/info1.png";
import projImg20 from "../assets/img/info2.png";
import projImg21 from "../assets/img/kasu.png";
import projImg22 from "../assets/img/kenji.png";

export const Projects = () => {

    const projects = [
        {
            title: "",
            description: "Aquetipos",
            imgUrl: projImg1,
        },
        {
            title: "",
            description: "Aquetipos",
            imgUrl: projImg2,
        },
        {
            title: "",
            description: "Aquetipos",
            imgUrl: projImg3,
        },
        {
            title: "",
            description: "Aquetipos",
            imgUrl: projImg4,
        },
        {
            title: "",
            description: "Aquetipos",
            imgUrl: projImg5,
        },
        {
            title: "",
            description: "Aquetipos",
            imgUrl: projImg6,
        },
    ];

    const me = [
        {
            title: "",
            description: "Me gustan los cubos de Rubik",
            imgUrl: projImg7,
        },
        {
            title: "",
            description: "Me gusta el Skate",
            imgUrl: projImg8,
        },
        {
            title: "",
            description: "Me gustan los videojuegos",
            imgUrl: projImg9,
        },
        {
            title: "",
            description: "Me gusta la informática",
            imgUrl: projImg10,
        },
        {
            title: "",
            description: "Me gusta Programar",
            imgUrl: projImg11,
        },
        {
            title: "",
            description: "Me gusta Spider-Man",
            imgUrl: projImg12,
        },
    ];

    const deca = [
        {
            title: "",
            description: "",
            imgUrl: projImg13,
        },
        {
            title: "",
            description: "",
            imgUrl: projImg14,
        },
        {
            title: "",
            description: "",
            imgUrl: projImg15,
        },
        {
            title: "",
            description: "",
            imgUrl: projImg16,
        },
        {
            title: "",
            description: "",
            imgUrl: projImg17,
        },
        {
            title: "",
            description: "",
            imgUrl: projImg18,
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Proyectos</h2>
                        <p>A continuación veremos los proyectos que se realizaron en la semana.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" defaultActiveKey="/home">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tareas</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">¿Quien soy yo?</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) =>{
                                                return(
                                                    <ProjectCard 
                                                        key={index}
                                                        {...project}
                                                        />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            me.map((project, index) =>{
                                                return(
                                                    <ProjectCard 
                                                        key={index}
                                                        {...project}
                                                        />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}