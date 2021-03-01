import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const Player = (props) => {
    const { name, field, salary, img } = props.player;
    console.log(props.player);
    return (
        <div className="player-component">
            <div className="image">
                <img src={img} alt=""/>
            </div>
            <div className="info">
                <h4>{name}</h4>
                <p>{field}</p>
                <h6>Salary:${salary}</h6>
                <button className='button' onClick={() =>props.handleAddPlayer(props.player)}><FontAwesomeIcon icon={faPlus} /> Add Player</button>
            </div>

        </div>
    );
};

export default Player;