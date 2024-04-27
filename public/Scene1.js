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
        this.points = 0;
        this.scoreShow = this.add.text(830, 0, 'Score: ' + this.points);
        this.physics.world.setFPS(60);

        this.paddle = this.physics.add.sprite(300, 400, 'paddle')
        
        this.paddle.setCollideWorldBounds(true);
        this.paddle.setImmovable(true);
        this.paddle.setSize(150, 150, true);
        this.paddle.setCircle(55, 0, 0);
        this.paddle.setScale(1.2);
        this.paddle.setPushable(false);

        /* Code to make paddle draggable, unstable,awd switched to using WASD as inputs
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
        */ 
        this.cursorKeys = this.input.keyboard.createCursorKeys();

        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
		this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
		this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
		this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    
        this.puck = this.physics.add.sprite(1000, 400, 'puck')
        
        this.puck.setVelocity(velo);
        this.puck.setCollideWorldBounds(true);
        this.puck.setBounce(1.1);
        this.puck.setMaxVelocity(750);
        this.puck.setCircle(55, 0, 0);
        this.puck.setScale(1);

        this.puck.body.useDamping = true;
        this.physics.add.collider(this.puck, this.paddle);
        this.text = this.add.text(200, 0, 'Puck Velocity: ' + velo);
        //this.physics.add.collider(this.paddle, this.puck);

        this.playerGoal = this.add.rectangle(0, 400, 1, 250, 0xff0000);
        this.physics.add.existing(this.playerGoal);
        this.physics.add.collider(this.playerGoal);
        this.playerGoal.body.setImmovable(true);
        
        this.puckGoal = this.add.rectangle(1200, 400, 1, 250, 0xFFACAC);
        this.physics.add.existing(this.puckGoal);
        this.physics.add.collider(this.puckGoal);
        this.puckGoal.body.setImmovable(true);
    }

    update(){
        if (this.physics.collide(this.paddle, this.puck)){
            velo = velo + 75;
            this.puck.setVelocity(velo);
            this.text.setText('Puck Velocity: ' + velo);
        }

        if(this.physics.collide(this.puck, this.puckGoal)){
            this.points += 100;
            this.scoreShow.setText("Score: " + this.points);
            this.puck.setPosition(1000, 400);
            this.puck.setVelocity(-1 * getRandomInt(300, 500));
        }

        const lbody = this.paddle.body

        if (this.keyA.isDown) {
					
            this.paddle.x -= 5;
            lbody.updateFromGameObject();
            
        } else if (this.keyS.isDown) {
            
            this.paddle.y += 5;
            lbody.updateFromGameObject();
        } else if (this.keyD.isDown) {
            
            this.paddle.x += 5;
            lbody.updateFromGameObject();
        } else if (this.keyW.isDown) {
            
            this.paddle.y -= 5;
            lbody.updateFromGameObject();
        }

    }
 
    
}

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  }

const config = {
    type: Phaser.WEBGL,
    width: 1200,
    height: 800,
    physics: {
        default: 'arcade',
        arcade: {
            debugShowVelocity: true,
            debug: true
            
        }
    },
    canvas: gameCanvas,
    scene: Scene1
};

const game = new Phaser.Game(config);