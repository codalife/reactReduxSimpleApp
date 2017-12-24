import React from 'react';
import Cell from './Cell.jsx';
import { connect } from 'react-redux';

class Board extends React.Component {
    constructor(props) {
        super();
        this.drawCells = this.drawCells.bind(this);
    }
    drawCells () {
        const board =  this.props.board.map((row, rowIndex) => (
            <div key={rowIndex}>
                {row.map((cell, cellIndex) => (<Cell id={'' + rowIndex + ',' + cellIndex} player={this.props.board[rowIndex][cellIndex]} key={'' + rowIndex + cellIndex}/>))}
            </div>
        ))
        return board;
    }
    render() {
        const board = this.drawCells();
        return (
            <div>
                <h1>{this.props.winner}</h1>
                {board}
            </div>
        )
    }
}

const mapStateToProps = state => ({board: state.board, winner: state.winner});

export default connect(mapStateToProps)(Board);

// redux had the board state
// array of length 9 - max number of moves possible
// each move is an object that holds:
// number - which step
// array - cells either null, z or o - pass down to individual cells as props


// have a cell
// cell has props that has null, x or o
// redux map state to props
// redux dispatch
