//import './gameStyle.css'
import {Phaser} from './phaser.js'

var config = {
    type:Phaser.AUTO,
    width: 800,
    height: 600,
    canvas: gameCanvas,
    scene: [Scene1]
}

window.onload = function() {
    const game = new Phaser.Game(config);
}