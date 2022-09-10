import Phaser from "phaser";
import { useEffect } from "react";
import gameConfig from "./config/gameConfig";

const Game = () : JSX.Element => {
    useEffect(() => {
        new Phaser.Game(gameConfig);
    }, [])

    return (
        <div id='game-container' />
    )
}

export default Game;