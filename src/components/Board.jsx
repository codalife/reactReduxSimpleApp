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
                <h1>The winner is: {this.props.winner}</h1>
                {board}
                <button onClick={this.props.refresh}>Refresh</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({board: state.board, winner: state.winner});
const mapDispatchToProps = dispatch => ({
    refresh(e) {
        dispatch({type: 'REFRESH'})
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Board);
