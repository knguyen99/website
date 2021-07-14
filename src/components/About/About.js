import React from 'react';
import './About.css';
import me from '../../content/imgs/me.jpg';

function About() {
    return (
        <div className="aboutContainer">
            <div className="rightCol">
                <div className="title">
                    <span> About <br />  &nbsp; Me </span>
                </div>
                <div className="bio"> 
                    <p>
                    Hello! I’m Khoi Nguyen and I graduated from UCLA in June 2021 with a Bachelor’s of Science in Computer Science. I am interested in Full Stack Development and UI/UX. 
                    <br /> <br />
                    My hobbies include photography, traveling, and listening to Electronic Dance Music.
                    <br /> <br />
                    If you are interested in me, check out my resume or other links below!
                    </p>
                    <button className="btn">View Resume</button>
                </div>

            </div>
            <div className="leftCol">
                <img className="profilePic" src={me} ></img>
            </div>
        </div>
    );
};

export default About;