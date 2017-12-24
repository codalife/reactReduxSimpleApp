const initialState = () => ({
    message: 'none',
    board: [
        new Array(3).fill(null),
        new Array(3).fill(null),
        new Array(3).fill(null)
    ],
    player: 'X',
    winner: null
})

const combinations = [
    [[0,0],[0,1],[0,2]],
    [[1,0],[1,1],[1,2]],
    [[2,0],[2,1],[2,2]],
    [[0,0],[1,0],[2,0]],
    [[0,1],[1,1],[2,1]],
    [[0,2],[1,2],[2,2]],
    [[0,0],[1,1],[2,2]],
    [[2,0],[1,1],[0,2]]
]

const calculate = (board, state) => {
    if (state.winner) {
        return state.winner;
    }
    const res = combinations.some(winning => (
        winning.reduce((player, dot) => player === board[dot[0]][dot[1]] ? player : '', state.player)
    )) ? state.player : null
    return res;
}

const reducer = (state = initialState(), action) => {
    switch (action.type) {
        case 'MOVE':
            const cell = action.payload.split(',');
            const newBoard = state.board.slice();
            newBoard[+cell[0]][+cell[1]] = state.player;
            return Object.assign(
                {}, 
                state, 
                {
                    player: state.player === 'X' ? 'O' : 'X', 
                    board: newBoard, 
                    winner: calculate(newBoard, state)
                });
        case "REFRESH":
            return Object.assign({}, initialState());
        default:
            return state;
    }
}

export default reducer;