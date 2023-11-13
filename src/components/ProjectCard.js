/*import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl}) =>{
    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
            <img src={imgUrl} />
                <div className="poj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}*/

import React, { useState } from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleImageClick = () => {
        if (!isOpen) {
            window.open(imgUrl);
            setIsOpen(true);
        }
    };

    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx" onClick={handleImageClick}>
                <img src={imgUrl} alt={description} />
                <div className="poj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    );
};





