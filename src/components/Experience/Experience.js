import React from 'react';
import './Experience.css';
import Job from './Job';
import Skill from './Skill';
import { ReactComponent as ExperienceSVG} from '../../content/imgs/experience.svg';
import { ReactComponent as SkillSVG} from '../../content/imgs/skills.svg';

function Experience() {
    return(
        <div className="experienceContainer">
            <div className="sub">
                <ExperienceSVG />
            </div>
            <div className="infoBox">
                <Job company="Logos" time="Jun 2020 - Sep 2020" position="Software Developer Intern" link="https://logosnews.tech/" />
                <Job company="Leidos" time="Jun 2019 - Sep 2019" position="Software Engineer Intern" link="https://www.leidos.com/" />
                <Job company="UCLA Student Media" time="Jan 2019 - Jun 2021" position="Web Developer Intern" link="https://www.uclastudentmedia.com/" />
            </div>
            <div className="sub2">
                <SkillSVG />
            </div>
            <div className="infoBox">
                <div className="skillRow">
                    <Skill type="Languages" slist={["C / C++","Java","Python","JavaScript", "HTML / CSS", "SQL", "Swift", "PHP" ]}/>
                    <Skill type="Frameworks" slist={["React", "Angular", "Node.js", "Express.js", "Three.js", "WebGL", "OpenCV"]}/>
                    <Skill type="Technologies" slist={["Git", "Linux", "Unix", "MongoDB", "Firebase RTDB"]}/>

                </div>
            </div>
        </div>
    );
}

export default Experience;