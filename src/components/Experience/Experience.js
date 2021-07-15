import React from 'react';
import './Experience.css';
import Job from './Job';


function Experience() {
    return(
        <div className="experienceContainer">
            <div className="subtitle">
                <span>Experience</span>
            </div>
            <div className="infoBox">
                <Job company="Logos" time="Jun 2020 - Sep 2020" position="Software Developer Intern"/>
                <Job company="Leidos" time="Jun 2019 - Sep 2019" position="Software Engineer Intern"/>
                <Job company="Leidos" time="Jan 2019 - Jun 2021" position="Web Developer Intern"/>
            </div>
            <div className="subtitle">
                <span>Skills</span>
            </div>
            <div className="infoBox">
                
            </div>
        </div>
    );
}

export default Experience;