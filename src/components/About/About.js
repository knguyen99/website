import React from 'react';
import './About.css';
import me from '../../content/imgs/me.jpg';
import resume from '../../Resume.pdf';
import { ReactComponent as EmailSVG } from '../../content/imgs/email.svg';
import { ReactComponent as GithubSVG } from '../../content/imgs/github.svg';
import { ReactComponent as LinkedinSVG } from '../../content/imgs/linkedin.svg';
import { ReactComponent as AboutSVG} from '../../content/imgs/about.svg';

function About() {
    return (
        <div className="aboutContainer">
            <div className="leftCol">
                <div className="title">
                    <AboutSVG />
                </div>
            </div>
            <div className="rightCol">
                <div className="bio">
                    <div className="bioText shadow">
                        <div className="bioTextContainer">
                            <p>
                                &nbsp; &nbsp; Hello! I’m Khoi Nguyen and I graduated from UCLA in June 2021 with a Bachelor’s of Science in Computer Science. I am interested in Full Stack Development and UI/UX. At UCLA, I was involved in Theta Tau Professional Engineering Fraternity, Creative Labs, and Vietnamese Culture Night.
                                <br /> <br />
                                &nbsp; &nbsp; My hobbies include photography, traveling, and playing video games. I love discovering new music and new recipes in my free time.
                                <br /> <br />
                                &nbsp; &nbsp; If you are interested in me, check out my resume below! Or if you just want to talk, email me at <a href="mailto:knguyen99@g.ucla.edu"> knguyen99@ucla.edu</a>!
                            </p>
                        </div>

                        <div className="linkRow">
                            <a className="btn resumeBtn shadow" href={resume} target="_blank"> View Resume </a>
                            <div className="icn"><a className="icn subtn" href="https://github.com/knguyen99" target="_blank"><GithubSVG className="icn" /></a></div>
                            <div className="icn"><a className="icn subtn" href="https://www.linkedin.com/in/khoi-v-nguyen/" target="_blank"> <LinkedinSVG className="icn" /> </a></div>
                            <div className="icn"><a className="icn subtn" href="mailto:knguyen99@g.ucla.edu" target="_blank"> <EmailSVG className="icn" /> </a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;