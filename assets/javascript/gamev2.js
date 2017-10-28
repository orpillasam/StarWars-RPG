$(document).ready(function() {

// an array of objects(players)
	var players = 	[rey = {
						name: "Rey",
						healthPoints: 100,
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
						initialAttackPower: 2,
						attackPower: 2,
						counterAttackPower: 25,
						isPlayerOne: false,
						isPlayerTwo: false,
						isDead: false,
					}
					]

	playerOneSelected = false;
	playerTwoSelected = false;
	gameStart = false;
	var enemyHealthPoints;
	var enemyCounterAttackPower;
	var enemiesRemaining = players.length;
	console.log("enemies remaining is " + enemiesRemaining)

	var lightsaberClash = document.createElement("audio");
	lightsaberClash.setAttribute("src", "assets/audio/lightsaber_clash.mp3");

	var lukeFeeling = document.createElement("audio");
	lukeFeeling.setAttribute("src", "assets/audio/luke_feeling.wav");

	var buttonSelect = document.createElement("audio");
	buttonSelect.setAttribute("src", "assets/audio/button_select.mp3");

	playerSelect();
	console.log("player one is " + playerOneSelected);
	//reset players back to original starting position with no styling

	function playerSelect(){
	
		$("#rey").on("click", function() {
			if (playerOneSelected === false){
			console.log("rey is first player");
			buttonSelect.play();
			$("#rey").appendTo("#player-fight-area");
			$("#player-name").text(rey.name);
			$("#player-hp").text("HealthPoints");
			$("#player-total-hp").text(rey.healthPoints);
			playerOneSelected = true;
			rey.isPlayerOne = true;
			enemySelect();
			console.log("player one is " + playerOneSelected);
			}
		});	
	
		$("#luke").on("click", function() {
			if (playerOneSelected === false){
				console.log("luke is first player");
				buttonSelect.play();
				$("#luke").appendTo("#player-fight-area");
				$("#player-name").text(luke.name);
				$("#player-hp").text("Health Points");
				$("#player-total-hp").text(luke.healthPoints);
				playerOneSelected = true;
				luke.isPlayerOne = true;
				console.log("player one is " + playerOneSelected);
				enemySelect();
			}
		});	
	
		$("#maul").on("click", function() {
			if (playerOneSelected === false){
				console.log("maul is first player");
				buttonSelect.play();
				$("#maul").appendTo("#player-fight-area");
				$("#player-name").text(maul.name);
				$("#player-hp").text("Health Points");
				$("#player-total-hp").text(maul.healthPoints);
				$("#player-total-hp").text(maul.healthPoints);
				playerOneSelected = true;
				maul.isPlayerOne = true;
				console.log("player one is " + playerOneSelected);
				enemySelect();
			}

		});	
	
		$("#vader").on("click", function() {
			if (playerOneSelected === false){
				console.log("vader is first player");
				buttonSelect.play();
				$("#vader").appendTo("#player-fight-area");
				$("vader").addClass('flipped');
				$("#player-name").text(vader.name);
				$("#player-hp").text("Health Points");
				$("#player-total-hp").text(vader.healthPoints);
				playerOneSelected = true;
				vader.isPlayerOne = true;
				console.log("player one is " + playerOneSelected);
				enemySelect();
			}
		});	
	}

	function enemySelect(){
		//HTML - display "select your opponent"
		$("#rey").on("click", function() {
			if (playerTwoSelected === false && rey.isPlayerOne === false){
			console.log("rey is second player");
			buttonSelect.play();
			$("#rey").appendTo("#opponent-fight-area");
			$("#opponent-name").text(rey.name);
			$("#opponent-hp").text("Health Points");
			$("#opponent-total-hp").text(rey.healthPoints);
			playerTwoSelected = true;
			isPlayerTwo = true;
			gameStart = true;
			console.log("player two is " + playerTwoSelected);
			startBattle();
			}
		});	
	
		$("#luke").on("click", function() {
			if (playerTwoSelected === false && luke.isPlayerOne === false){
				console.log("luke is second player");
				buttonSelect.play();
				$("#luke").appendTo("#opponent-fight-area");
				$("#opponent-name").text(luke.name);
				$("#opponent-hp").text("Health Points");
				$("#opponent-total-hp").text(luke.healthPoints);
				playerTwoSelected = true;
				isPlayerTwo = true;
				gameStart = true;
				console.log("gamestart is " + gameStart);
				console.log("player two is " + playerTwoSelected);
				startBattle();
			}
		});	
	
		$("#maul").on("click", function() {
			if (playerTwoSelected === false && maul.isPlayerOne === false){
				console.log("maul is second player");
				buttonSelect.play();
				$("#maul").appendTo("#opponent-fight-area");
				$("#opponent-name").text(maul.name);
				$("#opponent-hp").text("Health Points");
				$("#opponent-total-hp").text(maul.healthPoints);
				playerTwoSelected = true;
				isPlayerTwo = true;
				gameStart = true;
				console.log("player two is " + playerTwoSelected);
				startBattle();
			}
		});	
	
		$("#vader").on("click", function() {
			if (playerTwoSelected === false && vader.isPlayerOne === false){
				console.log("vader is second player");
				buttonSelect.play();
				$("#vader").appendTo("#opponent-fight-area");
				$("#opponent-name").text(vader.name);
				$("#opponent-hp").text("Health Points");
				$("#opponent-total-hp").text(vader.healthPoints);
				playerTwoSelected = true;
				isPlayerTwo = true;
				gameStart = true;
				console.log("player two is " + playerTwoSelected);
				startBattle();
			}
		});	
	}
	//checks progress of the game. If no enemies remain, gameWin, else, go to enemy select screen
	function checkProgress(){
		if (enemiesRemaining === 0){
			gameWin();
		}
		else {
			playerTwoSelected = false;
			$("#opponent-fight-area").html('');
			$("#opponent-name").text("");
			$("#opponent-total-hp").text("");
			enemySelect();
		}
	}

	function attack(){
		luke.healthPoints = luke.healthPoints - rey.attackPower;
		$("#opponent-total-hp").text(luke.healthPoints);
	}

	function counterAttack(){
		rey.healthPoints = rey.healthPoints - luke.counterAttackPower;
		$("#player-total-hp").text(rey.healthPoints);
		if (rey.healthPoints <= 0){
			gameLose();	
		}
	}

	function increaseAttackPower(){
		rey.attackPower = rey.attackPower + rey.initialAttackPower;
		//user attack power increases. (attackPower = attackPower + initialAttackPower)
	}
	//starst the game over again
	function gameReset(){
			gameStart = false;
			rey.healthPoints = 100;
			rey.attackPower = 6;
			luke.healthPoints = 125;
			enemiesRemaining = 1;
			console.log("game has been reset");
			console.log("rey's HP is " + rey.healthPoints);
			console.log("rey's atttack power is " + rey.attackPower);
			console.log("luke's HP is " + luke.healthPoints);
			$("#rey").appendTo("#character-start-one");
			$("#rey").css("border", "none" );
			$("#luke").appendTo("#character-start-two");
			$("#luke").css("border", "none" );
			$("#maul").appendTo("#character-start-three");
			$("#vader").appendTo("#character-start-four");
			playerSelect();
	}

	function gameWin() {
		console.log("you win")
		//player win screen
		//player win music
		gameReset();
	}

	function gameLose() {
		console.log("you lose");
		//player lose screen
		//player lose music
		gameReset();	
	}
	//this is the main battle code, once players have been selected. use the attack button
	//initiate attacks. 
	function startBattle(){
		$("#attack-button").on("click", function() {
			console.log("button pressed");
			if (gameStart === true){
		        lightsaberClash.play();    	
				attack();
				console.log("luke's HP is " + luke.healthPoints);
				if (luke.healthPoints <= 0){
				enemiesRemaining--;
				console.log("enemies remaining is " + enemiesRemaining);
				checkProgress();
				}
				else {
				increaseAttackPower();
				console.log("rey's attack power is " + rey.attackPower);
				counterAttack();
				lightsaberClash.play();
				console.log("rey's HP is " + rey.healthPoints);
				}
			}
			
		});		
	}	


});