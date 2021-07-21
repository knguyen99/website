import React, { useState, useEffect } from 'react';
import './Projects.css';
import { ReactComponent as ProjectsSVG } from '../../content/imgs/projects.svg'
import p1 from '../../content/imgs/portfolio-1.gif';
import p2 from '../../content/imgs/portfolio-2.png';
import p3 from '../../content/imgs/portfolio-3.png';
import p4 from '../../content/imgs/portfolio-4.gif';

function Projects() {
    const projectsText = {
        0: "These are some of my favorite projects! Feel free to hover over each image to learn more.",
        1: "Used Python scripting to optimize the creation of stereoscopic images. Worked with a team and personally worked on the file management system after collecting images.",
        2: "Created an iOS application that weighs items utilizing Apple's 3D Touch, measuring up to 385 grams. Worked on as an introduction to iOS programming through ACM.",
        3: "Used Scikit-Image library to turn cell phone into a 4D light field camera, adding synthetic focus to a selected template.",
        4: "Used OpenGL to model a solar system, applying different types of shading to each planet. The planets are each unique shapes and the camera matrix has the ability to follow each planet."
    };
    const projectsTitle = {
        0: "",
        1: "Parallax",
        2: "Scalar",
        3: "Post-Processed Imaging",
        4: "Solar System Model"
    }
    const [infoText, setInfoText] = useState({'title': projectsTitle[0], 'text': projectsText[0]})
    const changeText = (i) => {
        setInfoText({'title': projectsTitle[i], 'text': projectsText[i]})
    };

    return (
        <div className="projectsContainer">
            <div className="projectSide">
                <div className="title2">
                    <ProjectsSVG />
                </div>
                <div className="infoText">
                    <div className="projectTitle">
                        {infoText['title']}
                    </div>
                    <div className="projectDescription">
                        &nbsp; &nbsp; {infoText['text']}
                    </div>
                </div>
            </div>
            <div className="projectsGrid">
                <img className="projectPic"
                    src={p1}
                    onMouseOver={() => changeText(1)}
                    onMouseOut={() => changeText(0)}
                />
                <img className="projectPic"
                    src={p2}
                    onMouseOver={() => changeText(2)}
                    onMouseOut={() => changeText(0)}
                />
                <img className="projectPic"
                    src={p3}
                    onMouseOver={() => changeText(3)}
                    onMouseOut={() => changeText(0)}
                />
                <img className="projectPic"
                    src={p4}
                    onMouseOver={() => changeText(4)}
                    onMouseOut={() => changeText(0)}
                />
            </div>
        </div>
    );
}

export default Projects;