import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/PP circular.png";
//import 'animate.css';
//import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Ingeniero", "Estudiante", "Software" ];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else { 
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">BIENVENIDO A MI PROYECTO</span>
                        <h1>{`Hola, yo soy Alejandro`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Ingeniero", "Estudiante", "Software" ]'><span className="wrap">{text}</span></span></h1>
                        <p>Dentro de este proyecto, podremos encontrar las evidencias de trabajos en clase, así como una actividad interactiva que nos permitirá aprender sobre los temas que se han estado trabajando en este parcial.</p>
                        {/*<button>Vamos a ello! <ArrowRightCircle size={25} /></button> */}
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}