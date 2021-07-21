import React from 'react';

function Skill(props) {
    return(
        <div className="skillBox">
            <div className="skillType">
                {props.type}
            </div>
            <div className="skillList">
                <ul>
                    {props.slist.map(function(x) {return <li> {x}</li>})}
                </ul>
            </div>
        </div>
    );
}

export default Skill;