"use strict";

function Cella(props) {
	let color = props.color;
	let row = props.pos[0];
	let col = props.pos[1];
	
	const handleClick = () => {		
	    if (props.onClick) props.onClick(row, col, props.player);
	}
	
	
	return(
		<button className="cella" style={{backgroundColor: color}} onClick={handleClick}></button>
	);
}