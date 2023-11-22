import { Container, Row, Tab, Col, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/colaborador 1.jpg";
import projImg2 from "../assets/img/colaborador 2.jpg";
import projImg3 from "../assets/img/colaborador 3.jpg";
import projImg4 from "../assets/img/colaborador 4.jpg";
import projImg5 from "../assets/img/colaborador 5.jpg";
import projImg6 from "../assets/img/colaborador 6.jpg";
import projImg7 from "../assets/img/colaborador 7.jpg";
import projImg8 from "../assets/img/colaborador 8.jpg";
import projImg9 from "../assets/img/cubos.png";
import projImg10 from "../assets/img/skate.png";
import projImg11 from "../assets/img/games.png";
import projImg12 from "../assets/img/info.png";
import projImg13 from "../assets/img/programar.png";
import projImg14 from "../assets/img/spider.png";

export const Projects = () => {

    const projects = [
        {
            title: "",
            description: "Enfoque en los colaboradores",
            imgUrl: projImg1,
        },
        {
            title: "",
            description: "Enfoque en los colaboradores",
            imgUrl: projImg2,
        },
        {
            title: "",
            description: "Enfoque en los colaboradores",
            imgUrl: projImg3,
        },
        {
            title: "",
            description: "Enfoque en los colaboradores",
            imgUrl: projImg4,
        },
        {
            title: "",
            description: "Enfoque en los colaboradores",
            imgUrl: projImg5,
        },
        {
            title: "",
            description: "Enfoque en los colaboradores",
            imgUrl: projImg6,
        },
        {
            title: "",
            description: "Enfoque en los colaboradores",
            imgUrl: projImg7,
        },
        {
            title: "",
            description: "Enfoque en los colaboradores",
            imgUrl: projImg8,
        },
    ];

    const me = [
        {
            title: "",
            description: "Me gustan los cubos de Rubik",
            imgUrl: projImg9,
        },
        {
            title: "",
            description: "Me gusta el Skate",
            imgUrl: projImg10,
        },
        {
            title: "",
            description: "Me gustan los videojuegos",
            imgUrl: projImg11,
        },
        {
            title: "",
            description: "Me gusta la informática",
            imgUrl: projImg12,
        },
        {
            title: "",
            description: "Me gusta Programar",
            imgUrl: projImg13,
        },
        {
            title: "",
            description: "Me gusta Spider-Man",
            imgUrl: projImg14,
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
                                            me.map((project, index) => {
                                                return (
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