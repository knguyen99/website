import React from 'react';

function Job(props) {
    return(
        <div className="jobRow">
            <div className="leftJob"> 
                <div className="company">
                    {props.company}
                </div>
                <div className="position">
                    {props.position}
                </div>
            </div>
            <div className="rightJob">
                {props.time}
            </div>
        </div>
    );
}

export default Job;