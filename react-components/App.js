"use strict";

const rows = 5;
const cols = 5;

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			// celle -> yellow: non percorsa, green: safe, red: bomba
			celle: new Array(rows).fill().map(() => new Array(cols).fill("yellow")),
			bombe: new Array(rows).fill().map(() => new Array(cols).fill(false)),
			countGreen: 0,
			
			celleBot: new Array(rows).fill().map(() => new Array(cols).fill("yellow")),
			bombeBot: new Array(rows).fill().map(() => new Array(cols).fill(false)),
			countGreenBot: 0,
			
			turnBot: false,
			endGame: false,
		};
		
		this.onClick = this.onClick.bind(this);
	}
	
	
	componentDidMount() {
		this.generateBombs();
	}
	
	generateBombs() {
		let newBombe = this.state.bombe.map(row => [...row]);
		let newBombeBot = this.state.bombe.map(row => [...row]);

		let count = 0, c, r;
		while(count < 5) {
			r = Math.floor(Math.random() * rows);
			c = Math.floor(Math.random() * cols);

			if(!newBombe[r][c]) {
				newBombe[r][c] = true;
				count++
			}		
		}
		
		count = 0;
		while(count < 5) {
			r = Math.floor(Math.random() * rows);
			c = Math.floor(Math.random() * cols);

			if(!newBombeBot[r][c]) {
				newBombeBot[r][c] = true;
				count++
			}	
		}
		
		this.setState({ 
			bombe: newBombe,
			bombeBot: newBombeBot,
		});
	}
	
	
	updateGame(row, col) {
		if(this.state.celle[row][col] === "yellow") {
			let newCelle = this.state.celle.map(r => [...r]);
			let newEndGame = this.state.endGame;
			let newCountGreen = this.state.countGreen;
		
			if(this.state.bombe[row][col]) {
				newCelle[row][col] = "red";
		
				newEndGame = true;
				alert("Partita terminata: hai perso!");
			} else {
				newCelle[row][col] = "blue";
				newCountGreen++;
			}
		
			this.setState({
				celle: newCelle,
				endGame: newEndGame,
				countGreen: newCountGreen,
			});
		}
	}
	
	moveBot() {
		let row, col, ok = false;
		
		if(this.state.endGame) return;
		
		while(!ok) {
			row = Math.floor(Math.random() * rows);
			col = Math.floor(Math.random() * cols);
			
			if(this.state.celleBot[row][col] === "yellow") {
				let newCelle = this.state.celleBot.map(r => [...r]);
				let newEndGame = this.state.endGame;
				let newCountGreen = this.state.countGreenBot;
			
				if(this.state.bombeBot[row][col]) {
					newCelle[row][col] = "red";
			
					newEndGame = true;
					alert("Partita terminata: hai vinto!");
				} else {
					newCelle[row][col] = "blue";
					newCountGreen++;
			
					if(newCountGreen == 5) {
						newEndGame = true;
						alert("Partita terminata: pareggio!");
					}
				}
			
				this.setState({
					celleBot: newCelle,
					endGame: newEndGame,
					countGreenBot: newCountGreen,
				});
				
				ok = true;
			}			
		}
		
		this.setState({ turnBot: false });
	}
	
	
	onClick(row, col, player) {
		if(!this.state.endGame) {
			if(player === "Giocatore" && !this.state.turnBot) {
				this.updateGame(row, col);
				
				this.setState({ turnBot: true });
				setTimeout(() => {
					this.moveBot();
				}, 3000);
			}
		}
	}
	
	render() {
		return(
			<div className="container">
				<div className="griglia-container">
					<div className="griglia-title">Giocatore</div>
					<Griglia celle={this.state.celle} player={"Giocatore"} onClick={this.onClick} />
				</div>

				<div className="griglia-container">
					<div className="griglia-title">Computer</div>
					<Griglia celle={this.state.celleBot} player={"Computer"} onClick={this.onClick} />
				</div>
			</div>
		);
	}
}