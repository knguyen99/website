import React from 'react';
import './Home.css';
import { ReactComponent as NameSVG } from '../../content/imgs/name.svg';



function Home() {
    return(
        <div className="nameContainer">
            <NameSVG />
            <p className="subheader"> 
                Aspiring 
            </p>
        </div>
    );
}

export default Home;