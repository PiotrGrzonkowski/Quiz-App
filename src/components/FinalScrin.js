import React from 'react';
import './FinalScrin.css';

const FinalScrin = (props) => {
    const { time, score, mistakes } = props;
    const date = new Date().getTime();
    const milis = date - time;

    const restart = () => {
        props.restart()
    }

    return (
        <div className="final">
            <ul>
                <li>Your time : {`${Math.floor((milis / 1000) % 60)}s`} </li>
                <li>You scored points : {score} </li>
                <li>You made mistakes : {mistakes} </li>
                <li><button onClick={() => restart()} >Again?</button></li>
            </ul>
        </div>
    );
}

export default FinalScrin;