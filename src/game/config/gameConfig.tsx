import Phaser from 'phaser'
import { GAME } from '../enums/constants';
import InitialScene from './sceneList';

const gameConfig: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    parent: 'game-container',
    backgroundColor: '#EBEBEB',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: GAME.WIDTH,
        height: GAME.HEIGHT
    },
    scene: InitialScene
}

export default gameConfig;