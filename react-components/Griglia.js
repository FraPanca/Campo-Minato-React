"use strict";

function Griglia(props) {
		
	return(
		<div className="griglia">
			{props.celle.map((row, rowIndex) => (
				<div key={rowIndex} style={{ display: 'flex' }}>
					{row.map((cell, cellIndex) => (
						<Cella key={cellIndex} color={cell} pos={[rowIndex, cellIndex]} player={props.player} onClick={props.onClick} />
					))}
				</div>
			))}
		</div>
	);
}