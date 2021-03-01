import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import playerData from '../../data/data.json';
import Cart from '../Cart/Cart';
import './Players.css'

const Players = () => {
    const [players, setPlayers] = useState([]);
    useEffect(()=>{
        setPlayers(playerData);
        console.log(playerData);
    },[])

    const [addPlayer, setAddPlayer] = useState([]);
    const handleAddPlayer =(player)=>{
        const newAddPlayer = [...addPlayer, player];
        setAddPlayer(newAddPlayer);
        console.log('added',player);
    }
    return (
        <div className='p-container'>
            <div className='player-container'>
                 
                    {
                        players.map(pl => <Player player={pl} handleAddPlayer={handleAddPlayer}></Player>)
                    }
                
                
            </div>

            <div className='cart-container'>
                    <Cart cart={addPlayer} ></Cart>
            </div>
        </div>
    );
};

export default Players;