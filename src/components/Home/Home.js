import React from 'react';
import './Home.css';
import { ReactComponent as NameSVG } from '../../content/imgs/name.svg';
import me from '../../content/imgs/me.jpg';



function Home() {
    return(
        <div className="nameContainer">
            <div className="name">
                <NameSVG id="name"/>
            </div>
            {/* <div className="me">
                <img className="profilePic shadow" src={me} ></img>
            </div> */}
        </div>
    );
}

export default Home;