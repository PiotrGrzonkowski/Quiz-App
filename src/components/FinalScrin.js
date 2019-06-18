import React from 'react';

const FinalScrin = (props) => {
    const { time, score, mistakes } = props;
    const date = new Date().getTime();
    console.log(date)
    const howLong = date - time;



    return (
        <div>
            <ul>
                <li>You did it : {`${Math.round(howLong / 1000 / 60)}s`} </li>
                <li>You scored points : {score} </li>
                <li>You made mistakes : {mistakes} </li>
            </ul>
        </div>
    );
}

export default FinalScrin;