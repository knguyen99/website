import React from 'react';
import './About.css';
import me from '../../content/imgs/me.jpg';
import resume from '../../Resume.pdf';

function About() {
    return (
        <div className="aboutContainer">
            <div className="rightCol">
                <div className="title">
                    <span> ABOUT <br />  &nbsp; ME </span>
                </div>
                <div className="bio">
                    <div className="bioText shadow">
                        <div className="bioTextContainer">
                            <p>
                                Hello! I’m Khoi Nguyen and I graduated from UCLA in June 2021 with a Bachelor’s of Science in Computer Science. I am interested in Full Stack Development and UI/UX.
                                <br /> <br />
                                My hobbies include photography, traveling, and listening to Electronic Dance Music.
                                <br /> <br />
                                If you are interested in me, check out my resume or email me at <a href="mailto:knguyen99@g.ucla.edu"> knguyen99@ucla.edu</a>!
                            </p>
                        </div>
                    </div>
                    <a className="btn resumeBtn shadow" href={resume} target="_blank"> View Resume </a>
                </div>
                <div className="subtitle">
                    <span> Links! </span>
                </div>

                <div className="linkRow">
                    <a className="btn subtn shadow" href="https://github.com/knguyen99" target="_blank"> Github </a>
                    <a className="btn subtn shadow" href="https://www.linkedin.com/in/khoi-v-nguyen/" target="_blank"> LinkedIn </a>
                    <a className="btn subtn shadow" href="mailto:knguyen99@g.ucla.edu" target="_blank"> Email </a>
                </div>
            </div>
            <div className="leftCol">
                <img className="profilePic shadow" src={me} ></img>
            </div>
        </div>
    );
};

export default About;