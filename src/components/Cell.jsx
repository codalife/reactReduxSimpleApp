import React from 'react';
import { connect } from 'react-redux';

const cellStyle = {
    width: 100,
    height: 100,
    borderWidth: 0.5,
    borderColor: 'black',
    backgroundColor: "gray",
    boxSizing: "content-box"
}

const Cell = props => (<button id={props.id} onClick={props.giveData} style={cellStyle}>{props.player}</button>);
const dispatchAction = dispatch => ({
    giveData(e) {
        dispatch({type: 'MOVE', payload: e.target.id})
    }
})

export default connect(null, dispatchAction)(Cell);