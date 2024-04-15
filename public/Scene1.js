var velo = 100;
class Scene1 extends Phaser.Scene
{
    constructor(){
        super("scene-game");
        this.paddle;
        this.puck;
    }

    preload ()
    {
        this.load.image('puck', '/../public/picsForHockey/puck.png');
        this.load.image('paddle', '/../public/picsForHockey/hockey-paddle.png');
    }

    create ()
    {
        this.paddle = this.physics.add.sprite(300, 400, 'paddle')
        
        this.paddle.setCollideWorldBounds(true);
        this.paddle.setSize(150, 150, true);
        this.paddle.setCircle(55, 0, 0);
        this.paddle.setScale(1.2);
        this.paddle.setPushable(false);


        this.input.setDraggable(this.paddle.setInteractive());
        
        this.input.on('dragstart', (pointer, obj) =>
        {
            obj.body.moves = false;
        });

        this.input.on('drag', (pointer, obj, dragX, dragY) =>
        {
            obj.setPosition(dragX, dragY);
        });

        this.input.on('dragend', (pointer, obj) =>
        {
            obj.body.moves = true;
        });

        this.puck = this.physics.add.image(1000, 400, 'puck')
        
        this.puck.setVelocity(velo);
        this.puck.setCollideWorldBounds(true);
        this.puck.setBounce(1.1);
        
        this.puck.setCircle(55, 0, 0);
        this.puck.setScale(1);

        this.physics.add.collider(this.puck, this.paddle, this.updateVelo);
        //this.physics.add.collider(this.paddle, this.puck);

        
    }

    update(){
        if (this.physics.collide(this.paddle, this.puck)){
            velo = velo + 75;
            this.puck.setVelocity(velo);
        }
    }
    
}



const config = {
    type: Phaser.WEBGL,
    width: 1200,
    height: 800,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    canvas: gameCanvas,
    scene: Scene1
};

const game = new Phaser.Game(config);