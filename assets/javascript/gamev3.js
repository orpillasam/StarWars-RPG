$(document).ready(function() {

// an array of objects(players)
	var players = 	[rey = {
						name: "Rey",
						healthPoints: 120,
						initialAttackPower: 8,
						attackPower: 8,
						counterAttackPower: 2,
						isPlayerOne: false,
						isPlayerTwo: false,
						isDead: false,
					}, 
					luke = {
						name: "Luke Skywalker",
						healthPoints: 100,
						initialAttackPower: 9,
						attackPower: 9,
						counterAttackPower: 5,
						isPlayerOne: false,
						isPlayerTwo: false,
						isDead: false,
					},
					maul = {
						name: "Darth Maul",
						healthPoints: 150,
						initialAttackPower: 2,	
						attackPower: 2,
						counterAttackPower: 20,
						isPlayerOne: false,
						isPlayerTwo: false,
						isDead: false,
					},
					vader = {
						name: "Darth Vader",
						healthPoints: 180,
						initialAttackPower: 1,
						attackPower: 1,
						counterAttackPower: 25,
						isPlayerOne: false,
						isPlayerTwo: false,
						isDead: false,
					}
					]
	//var images = ["assets/images/rey_small.png", "assets/images/luke_skywalker_small.png", "assets/images/darth_maul.png", "assets/images/darth_vader_small.png", "assets/images/palpatine_lightning.gif"];	
	var player;
	var opponent;
	playerOneSelected = false;
	playerTwoSelected = false;
	gameStart = false;
	var enemyHealthPoints;
	var enemyCounterAttackPower;
	var enemiesRemaining = players.length -1;
	console.log("enemies remaining is " + enemiesRemaining)

	var lightsaberClash = new Audio ("assets/audio/lightsaber_clash.mp3");
	var lukeFeeling = new Audio ("assets/audio/luke_feeling.wav");
	var buttonSelect = new Audio ("assets/audio/button_select.mp3");
	var palpatineApprentice = new Audiodocument.createElement("audio");
	palpatineApprentice.setAttribute("src", "assets/audio/palpatine_apprentice.mp3");

	var palpatineKill = document.createElement("audio");
	palpatineKill.setAttribute("src", "assets/audio/palpatine_kill.mp3");

	var palpatineGood = document.createElement("audio");
	palpatineGood.setAttribute("src", "assets/audio/palpatine_good.mp3");
		
	var palpatineStrong = document.createElement("audio");
	palpatineStrong.setAttribute("src", "assets/audio/palpatine_strong.mp3");

	var palpatineDestroyed = document.createElement("audio");
	palpatineDestroyed.setAttribute("src", "assets/audio/palpatine_destroyed.mp3");

	var palpatinePowerful = document.createElement("audio");
	palpatinePowerful.setAttribute("src", "assets/audio/palpatine_powerful.mp3");

	playerSelect();
	console.log("player one is " + playerOneSelected);
	//reset players back to original starting position with no styling
	startBattle();

	function playerSelect(){
	
		$("#rey").on("click", function() {
			if (playerOneSelected === false){
				console.log("rey is first player");
				buttonSelect.play();
				$("#rey").appendTo("#player-fight-area");
				$("#player-name").text(rey.name);
				$("#player-hp").text("Force Level");
				$("#player-total-hp").text(rey.healthPoints);
				playerOneSelected = true;
				rey.isPlayerOne = true;
				player = rey;			
				$("#rey").addClass('flipped');
				palpatineApprentice.play();
				setTimeout(enemySelect, 1000 *2.5);
				console.log("player one is " + playerOneSelected);
				}
		});	
	
		$("#luke").on("click", function() {
			if (playerOneSelected === false){
				console.log("luke is first player");
				buttonSelect.play();
				$("#luke").appendTo("#player-fight-area");
				$("#player-name").text(luke.name);
				$("#player-hp").text("Force Level");
				$("#player-total-hp").text(luke.healthPoints);
				playerOneSelected = true;
				luke.isPlayerOne = true;
				player = luke;
				$("#luke").addClass('flipped');
				palpatineApprentice.play();
				console.log("player one is " + playerOneSelected);
				setTimeout(enemySelect, 1000 *2.5);
			}
		});	
	
		$("#maul").on("click", function() {
			if (playerOneSelected === false){
				console.log("maul is first player");
				buttonSelect.play();
				$("#maul").appendTo("#player-fight-area");
				$("#player-name").text(maul.name);
				$("#player-hp").text("Force Level");
				$("#player-total-hp").text(maul.healthPoints);
				$("#player-total-hp").text(maul.healthPoints);
				playerOneSelected = true;
				maul.isPlayerOne = true;
				player = maul;
				palpatineApprentice.play();
				console.log("player one is " + playerOneSelected);
				setTimeout(enemySelect, 1000 *2.5);
			}
		});	
	
		$("#vader").on("click", function() {
			if (playerOneSelected === false){
				console.log("vader is first player");
				buttonSelect.play();
				$("#vader").appendTo("#player-fight-area");
				$("vader").addClass('flipped');
				$("#player-name").text(vader.name);
				$("#player-hp").text("Force Level");
				$("#player-total-hp").text(vader.healthPoints);
				playerOneSelected = true;
				vader.isPlayerOne = true;
				player = vader;
				$("#vader").addClass('flipped');
				palpatineApprentice.play();
				console.log("player one is " + playerOneSelected);
				setTimeout(enemySelect, 1000 *2.5);
			}
		});	
	}

	function enemySelect(){
		$("#select-text").text("Select your Opponent");
		//HTML - display "select your opponent"
		$("#rey").on("click", function() {
			if (playerTwoSelected === false && rey.isPlayerOne === false){
			console.log("rey is second player");
			buttonSelect.play();
			$("#rey").appendTo("#opponent-fight-area");
			$("#opponent-name").text(rey.name);
			$("#opponent-hp").text("Force Level");
			$("#opponent-total-hp").text(rey.healthPoints);
			playerTwoSelected = true;
			isPlayerTwo = true;
			gameStart = true;
			opponent = rey;
			$("#select-text").text("");
			palpatineKill.play();
			console.log("player two is " + playerTwoSelected);
			}
		});	
	
		$("#luke").on("click", function() {
			if (playerTwoSelected === false && luke.isPlayerOne === false){
				console.log("luke is second player");
				buttonSelect.play();
				$("#luke").appendTo("#opponent-fight-area");
				$("#opponent-name").text(luke.name);
				$("#opponent-hp").text("Force Level");
				$("#opponent-total-hp").text(luke.healthPoints);
				playerTwoSelected = true;
				isPlayerTwo = true;
				gameStart = true;
				opponent = luke;
				$("#select-text").text("");
				palpatineKill.play();
				console.log("gamestart is " + gameStart);
				console.log("player two is " + playerTwoSelected);
			}
		});	
	
		$("#maul").on("click", function() {
			if (playerTwoSelected === false && maul.isPlayerOne === false){
				console.log("maul is second player");
				buttonSelect.play();
				$("#maul").appendTo("#opponent-fight-area");
				$("#opponent-name").text(maul.name);
				$("#opponent-hp").text("Force Level");
				$("#opponent-total-hp").text(maul.healthPoints);
				playerTwoSelected = true;
				isPlayerTwo = true;
				gameStart = true;
				opponent = maul;
				$("#maul").addClass('flipped');
				$("#select-text").text("");
				palpatineKill.play();
				console.log("player two is " + playerTwoSelected);
			}
		});	
	
		$("#vader").on("click", function() {
			if (playerTwoSelected === false && vader.isPlayerOne === false){
				console.log("vader is second player");
				buttonSelect.play();
				$("#vader").appendTo("#opponent-fight-area");
				$("#opponent-name").text(vader.name);
				$("#opponent-hp").text("Force Level");
				$("#opponent-total-hp").text(vader.healthPoints);
				playerTwoSelected = true;
				isPlayerTwo = true;
				gameStart = true;
				opponent = vader;
				$("#select-text").text("");
				palpatineKill.play();
				console.log("player two is " + playerTwoSelected);
			}
		});	
	}
	//checks progress of the game. If no enemies remain, gameWin, else, go to enemy select screen
	function checkProgress(){
			if (enemiesRemaining === 0){
			gameWin();
		}
		else {	
			gameStart = false;
				if (enemiesRemaining === 2){
					palpatineGood.play();
				}
				else if (enemiesRemaining === 1){
					palpatineStrong.play();
		}
			$("#opponent-").html('');
			$("#opponent-name").text("");
			$("#opponent-total-hp").text("");
			setTimeout(function(){playerTwoSelected = false}, 1000 * 2.8);
			setTimeout(function(){$("#select-text").text("Select your Opponent")}, 1000 *2.8);
			console.log("player two selected is " + playerTwoSelected);
		}	
	}

	function attack(){
		opponent.healthPoints = opponent.healthPoints - player.attackPower;
		$("#opponent-total-hp").text(opponent.healthPoints);
		console.log("opponent HP is " + opponent.healthPoints);
	}

	function counterAttack(){
		player.healthPoints = player.healthPoints - opponent.counterAttackPower;
		$("#player-total-hp").text(player.healthPoints);
		console.log("player HP is " + player.healthPoints);
		console.log("opponent counter attack power is " + opponent.counterAttackPower)
		if (player.healthPoints <= 0){
			gameLose();	
		}
	}

	function increaseAttackPower(){
		player.attackPower = player.attackPower + player.initialAttackPower;
		console.log("player attack power is " + player.attackPower);
	}
	//starst the game over again
	function gameReset(){
			var players = 	[rey = {
						name: "Rey",
						healthPoints: 221,
						initialAttackPower: 6,
						attackPower: 6,
						counterAttackPower: 5,
						isPlayerOne: false,
						isPlayerTwo: false,
						isDead: false,
					}, 
					luke = {
						name: "Luke Skywalker",
						healthPoints: 125,
						initialAttackPower: 5,
						attackPower: 5,
						counterAttackPower: 10,
						isPlayerOne: false,
						isPlayerTwo: false,
						isDead: false,
					},
					maul = {
						name: "Darth Maul",
						healthPoints: 150,
						initialAttackPower: 4,	
						attackPower: 4,
						counterAttackPower: 15,
						isPlayerOne: false,
						isPlayerTwo: false,
						isDead: false,
					},
					vader = {
						name: "Darth Vader",
						healthPoints: 180,
						initialAttackPower: 3,
						attackPower: 3,
						counterAttackPower: 25,
						isPlayerOne: false,
						isPlayerTwo: false,
						isDead: false,
					}
					]
			playerOneSelected = false;
			playerTwoSelected = false;
			rey.isPlayerOne = false;
			luke.isPlayerOne = false;
			maul.isPlayerOne = false;
			vader.isPlayerOne = false;
			$("#game-end-container").html("");
			$("#game-end-text-container").html("");
			$("#opponent-name").text("");
			$("#opponent-hp").text("");
			$("#player-name").text("");
			$("#player-hp").text("");
			$("#player-total-hp").text("");
			$("#opponent-total-hp").text("");
			$("#player-fight-area").html("");
			$("#opponent-fight-area").html("");
			$(".character-selection-section").html("");
			// $(".character-selection-section").html("<img id='rey' />")
			// $(".character-selection-section").html("<img id='luke'/>")
			// $(".character-selection-section").html("<img id='maul' />")
			// $(".character-selection-section").html("<img id='vader' />")
			$("#rey").appendTo(".character-selection-section");
			$("#luke").appendTo(".character-selection-section");
			$("#maul").appendTo(".character-selection-section");
			$("#vader").appendTo(".character-selection-section");

			console.log("game has reset");
	}

	function gameWin() {
		$("#opponent-total-hp").text(0);
		console.log("you win")	
		gameStart = false;
		palpatinePowerful.play();
		setTimeout(function(){$("#game-end-container").html("<img id='palpatine' src='assets/images/palpatine.jpg'/>")}, 1000*3);
		$("#game-end-text-container").html("Welcome to the Dark Side of the Force");
		$("#game-end-text-container").css({"color":"red", "font-size":"30px","font-family":"Trade Winds", 
			"position":"absolute", "left":"50%", "margin-right":"-50%", "transform":"translate(-50%)", 
			"text-shadow": "2px 2px 2px rgba(255,255,255,.6)"});
		setTimeout(gameReset, 1000 * 10);
	}

	function gameLose() {
		$("#player-total-hp").text(0);
		gameStart = false;
		console.log("you lose");
		palpatineDestroyed.play();
		setTimeout(function(){$("#game-end-container").html("<img id='palpatine' src='assets/images/palpatine_lightning.gif'/>")}, 1000*3);
		$("#game-end-text-container").html("Game Over");
		$("#game-end-text-container").css({"color":"red", "font-size":"30px","font-family":"Trade Winds", 
			"position":"absolute", "left":"50%", "margin-right":"-50%", "transform":"translate(-50%)", 
			"text-shadow": "2px 2px 2px rgba(255,255,255,.6)"});
		setTimeout(gameReset, 1000 * 10);	
	}
	//this is the main battle code, once players have been selected. use the attack button to
	//initiate attacks. 
	function startBattle(){
		$("#attack-button").on("click", function() {
			console.log("button pressed");
			if (gameStart === true){
		        lightsaberClash.play();    	
				attack();
				increaseAttackPower();
				if (opponent.healthPoints <= 0){
				enemiesRemaining--;
				console.log("enemies remaining is " + enemiesRemaining);
				checkProgress();
				}
				else {
				counterAttack();
				lightsaberClash.play();
				}
			}		
		});		
	}	
});