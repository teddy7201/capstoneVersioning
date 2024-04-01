//import './gameStyle.css'
import {Phaser} from './phaser.js'

var config = {
    type:Phaser.WEBGL,
    width: 800,
    height: 600,
    canvas: gameCanvas
}

const game = new Phaser.Game(config);

