var playerName = getName();
var games_id = 'DEFAULT';
var game_date = new Date();
var points = 0;

class Scene1 extends Phaser.Scene
{

    preload ()
    {
        this.load.image('puck', '/../public/picsForHockey/puck.png');
        this.load.image('paddle', '/../public/picsForHockey/hockey-paddle.png');
    }

    create ()
    {   
        this.scoreShow = this.add.text(600, 0, 'Score: ' + points);
        this.physics.world.setFPS(60);

        this.paddle = this.physics.add.sprite(300, 400, 'paddle')
        this.paddle.body.setCollideWorldBounds(true);
        this.paddle.setCircle(55, 0, 0);
        this.paddle.setScale(1.2);
        this.paddle.body.setBoundsRectangle(new Phaser.Geom.Rectangle(0, 0, 600, 800));
        
        this.paddle.setImmovable(true);
        
        /* Code to make paddle draggable, unstable, switched to using WASD as inputs
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
        
        this.puck.setVelocity(300);

        this.puck.setCollideWorldBounds(true);

        this.puckBouce = 1;
        this.puck.setBounce(this.puckBouce);
        this.puck.setCircle(55, 0, 0);

        this.puck.body.useDamping = true;
        this.physics.add.collider(this.puck, this.paddle);

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
            this.puck.setBounce(this.puckBouce + 0.1);
            this.puck.setVelocity(300);
        }

        if (this.puck.body.checkWorldBounds()) {
			this.puck.setBounce(this.ballbounce + 0.2);
		}

        if(this.physics.collide(this.puck, this.puckGoal)){
            points += 100;
            this.scoreShow.setText("Score: " + points);
            this.puck.setPosition(1000, 400);
            if(this.points <= 200){
                this.puck.setVelocity(-1 * getRandomInt(300, 500));
                this.puck.setMaxVelocity(500);
            }
            else if (this.points <= 400){
                this.puck.setVelocity(-1 * getRandomInt(400, 700));
                this.puck.setMaxVelocity(700);
            }
            else if (this.points <= 600){
                this.puck.setVelocity(-1 * getRandomInt(600, 900));
                this.puck.setMaxVelocity(900);
            }
            else{
                this.puck.setVelocity(-1 * getRandomInt(800, 1500));
                this.puck.setMaxVelocity(1500);
            }
            
            
        }

        if(this.physics.collide(this.puck, this.playerGoal)){
            this.win = this.add.text(450, 500, `Final Score: ` + points);

			this.gameRestart = this.add.text(375, 200, 'Restart Game?', {
				color: "black",
				backgroundColor: "white"
			});
            this.goHome = this.add.text(775, 200, 'Go Home?', {
				color: "black",
				backgroundColor: "white"
			});

            this.games_idText = this.add.text(375,400, 'Game ID: ' + games_id, {
				color: "black",
				backgroundColor: "white"
			});

            this.player_nameText = this.add.text(775,600, 'Player Name: ' + playerName, {
				color: "black",
				backgroundColor: "white"
			});

            this.date = this.add.text(375,600, 'Date: ' + formatDate(game_date), {
				color: "black",
				backgroundColor: "white"
			});

            this.playerGoal.destroy();
            this.puckGoal.destroy();

            sendData();

			this.gameRestart.setInteractive();
			this.gameRestart.on('pointerdown', (pointer) => {
				points = 0
                this.scene.restart();
            });

            this.goHome.setInteractive();
            this.goHome.on('pointerdown', (pointer) => {
                goHome();
            });
        }

        this.paddle.setVelocity(0);
        if (this.keyA.isDown) {
            this.paddle.setVelocityX(-400);
        } else if (this.keyD.isDown) {
            this.paddle.setVelocityX(400);
        } 
        if (this.keyW.isDown) {
            this.paddle.setVelocityY(-400);
        } else if (this.keyS.isDown) {
            this.paddle.setVelocityY(400);
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