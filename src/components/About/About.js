import React from 'react';
import './About.css';
import me from '../../content/imgs/me.jpg';
import resume from '../../Resume.pdf';

function About() {
    return (
        <div className="aboutContainer">
            <div className="rightCol">
                <div className="title">
                    <span> About <br />  &nbsp; Me </span>
                </div>
                <div className="bio">
                    <div className="bioText">
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
                    <a className="btn resumeBtn" href={resume} target="_blank"> View Resume </a>
                    

                </div>
                <div className="subtitle">
                        <span> Links! </span>
                    </div>

                    <div className="linkRow">
                        <a className="btn subtn" href={resume} target="_blank"> Github </a>
                        <a className="btn subtn" href={resume} target="_blank"> LinkedIn </a>
                    </div>
                    <div className="linkRow">
                        <a className="subtn btn" href={resume} target="_blank"> Instagram </a>
                        <a className="subtn btn" href={resume} target="_blank"> Email </a>
                    </div>
            </div>
            <div className="leftCol">
                <img className="profilePic" src={me} ></img>
            </div>
        </div>
    );
};

export default About;