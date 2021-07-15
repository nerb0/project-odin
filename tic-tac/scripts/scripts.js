

const player = (name,mark) => {
    
    return{
        name,
        mark,
    }
}
const gameBoard = (_GRID) => {
    let _line = [];
    const checkBoard = () => {
        let filled = 'draw'; // assume grid is full
        for(let curr = 0; curr < 9; curr++){
            let x = Math.floor(curr/3);
            let y = curr %3;
            let mark = _GRID[x][y];
            _line = [curr]
            if(mark != ''){
                let _horizontal = true; // assume horizontal tiles are the same
                let _vertical = true; // assume horizontal tiles are the same
                let _diagonal = true; // assume diagonal tiles are the same
                for(let i = y - 1; i >= Math.max(0, i); i--){
                    if(_GRID[x][i] != mark) {
                        _horizontal = false; // set false if adjacent tiles is not the same
                        _line = [curr]; // empty the assumed winning line
                        break;
                    }
                    if(filled && _GRID[x][i] == '') 
                        filled = false; // set false if there is a blank space
                    _line.push(x*3 + i);
                }
                if(_horizontal){// skip if the first loop return false; resume if first loop is skipped
                    for(let i = y + 1; i <= Math.min(2, i); i++){
                        if(_GRID[x][i] != mark) {
                            _horizontal = false; 
                            _line = [curr];
                            break;
                        }
                        if(filled && _GRID[x][i] == '') 
                            filled = false; 
                        _line.push(x*3 + i);
                    }
                }
                if(_horizontal) return mark;
         
                // Vertical
                for(let i = x - 1; i >= Math.max(0, i); i--){
                    if(_GRID[i][y] != mark){
                        _vertical = false; 
                        _line = [curr];
                        break;
                    }
                    if(filled && _GRID[i][y] == '') 
                        filled = false; // set false if there is a blank space
                    _line.push(i*3 + y);
                } 
                if(_vertical){
                    for(let i = x + 1; i <= Math.min(2, i); i++){
                        if(_GRID[i][y] != mark){
                            _vertical = false;
                            _line = [curr];
                            break;
                        }
                        if(filled && _GRID[i][y] == '') 
                            filled = false; // set false if there is a blank space
                        _line.push(i*3 + y);
                    }
                }
                if(_vertical) return mark;
        
                // Diagonal
                if(x - y == 0){
                    for(let i = x - 1, j = y - 1; i >= 0 && j >= 0 ; i--, j--){
                        if(_GRID[i][j] != mark){
                            _diagonal = false;
                            _line = [curr];
                            break;
                        } 
                        if(filled && _GRID[i][j] == '') 
                            filled = false; // set false if there is a blank space
                        _line.push(i*3 + j);
                    }
                    if(_diagonal){
                        for(let i = x + 1, j = y + 1; i <= 2 && j <= 2; i++, j++){
                            if(_GRID[i][j] != mark){
                                _diagonal = false;
                                _line = [curr];
                                break;
                            }
                            if(filled && _GRID[i][j] == '') 
                                filled = false; // set false if there is a blank space
                            _line.push(i*3 + j);
                        }
                    } if(_diagonal) return mark;
                }
                else if(x + y == 2){
                    for(let i = x - 1, j = y + 1; i >=  0 && j <= 2; i--, j++){
                        if(_GRID[i][j] != mark){
                            _diagonal = false;
                            _line = [curr];
                            break;
                        }
                        if(filled && _GRID[i][j] == '') 
                            filled = false; // set false if there is a blank space
                        _line.push(i*3 + j);
                    }
                    if(_diagonal){
                        for(let i = x + 1, j = y - 1; i <= 2 && j >= 0; i++, j--){
                            if(_GRID[i][j] != mark){
                                _diagonal = false;
                                _line = [curr];
                                break;
                            }
                            if(filled && _GRID[i][j] == '') 
                                filled = false; // set false if there is a blank space
                            _line.push(i*3 + j);
                        }
                    } if(_diagonal) return mark;
                } else _diagonal = false;
            }else filled = false;
        }
        return filled;
    }
    const markBoard = (x,y, mark) => {
        if(_GRID[x][y] == ''){
            _GRID[x][y] = mark;
            return true;
        }
        return false;
    }
    const getLine = () => {
        return _line;
    }
    const getGrid = () => {
        return _GRID;
    }
    const clear = (x,y) => {
        _GRID[x][y] = '';
    }
    return{
        getLine,
        checkBoard,
        markBoard,
        getGrid,
        clear
    }
}

const gameController = (() => {
    let _board = gameBoard([['','',''],['','',''],['','','']]);
    let _current = 0;
    let _status = 'play'
    let _enemy = 'player';
    let difficulty = 'easy';
    let scores;
    let players = [
        player('One', 'X'),
        player('Two', 'O')
    ]

    const mark = (x,y) => {
        if(_board.markBoard(x,y, players[_current].mark)){
            let result = _board.checkBoard();
            let player = players[_current];
            if(result){
                _status = result;
                player.prev = players[0].mark;
                return player;
            }else if(_enemy == 'AI'){
                let move = autoChess();
                move.prev = players[0].mark;
                return move;
            }
            else{
                togglePlayer();
                return player;
            }
        }else return false;
    }
    const autoChess = () => {
        togglePlayer();
        let ai = players[1].mark;
        let human = players[0].mark;
        let move = {};
        if(difficulty == 'normal'){
            let x = Math.floor(Math.random() * 3);
            let y = Math.floor(Math.random() * 3);
            while(!_board.markBoard(x,y, players[_current].mark)){
                x = Math.floor(Math.random() * 3);
                y = Math.floor(Math.random() * 3);
            }
            move = {x,y, mark: players[_current].mark};
            _board.checkBoard();
        }
        else if(difficulty == 'undebatable'){
            scores = {
                draw: 0
            }
            scores[ai] = 2;
            scores[human] = -1;
            let max = -Infinity;
            for(let x = 0; x < 3; x ++){
                for(let y = 0; y < 3; y++){
                    if(_board.markBoard(x, y, players[_current].mark)){
                        let score = minimax(_board, false);
                        _board.clear(x,y);
                        if(score > max){
                            max = score;
                            move = {x,y};
                        }
                    }
                }
            }
            _board.markBoard(move.x,move.y, players[_current].mark)
        }else{
            scores = {
                draw: 0
            }
            scores[human] = 2;
            scores[ai] = -2;
            let max = -Infinity;
            for(let x = 0; x < 3; x ++){
                for(let y = 0; y < 3; y++){
                    if(_board.markBoard(x, y, players[_current].mark)){
                        let score = minimax(_board, false);
                        _board.clear(x,y);
                        if(score > max){
                            max = score;
                            move = {x,y};
                        }
                    }
                }
            }
            _board.markBoard(move.x,move.y, players[_current].mark)
        }
        let result = _board.checkBoard();
        if(result){
            _status = result;
            move.line = _board.getLine();
            move.name = players[_current].name;
        }
        move.mark = players[_current].mark;
        togglePlayer();
        return move;
    }
    const reset = () => {
        _board = gameBoard([['','',''],['','',''],['','','']]);
        _current = 0;
        _status = 'play'
    }
    const getLine = () => {
        return _board.getLine()
    }

    const minimax = (board, maximize) =>{
        let result = board.checkBoard();
        if(result) return scores[result];
        else if(maximize){
            let max = -Infinity;
            for (let i = 0; i < 3; i++) {
                for(let j = 0; j < 3; j++){
                    if(board.markBoard(i,j, players[1].mark)){
                        score = minimax(board, false);
                        board.clear(i,j);
                        max = Math.max(score, max);
                    }
                }
            }
            return max;
        }else{
            let min = Infinity;
            for (let i = 0; i < 3; i++) {
                for(let j = 0; j < 3; j++){
                    if(board.markBoard(i,  j, players[0].mark)){
                        score = minimax(board, true);
                        board.clear(i,j);
                        min = Math.min(score, min);
                    }
                }
            }
            return min;
        }
    }
    const togglePlayer = () => {
        if(_current == 0) _current = 1;
        else _current = 0;
    }
    const getStatus = () => {
        return _status
    }
    const getEnemy = () => {
        return _enemy
    }
    const toggleEnemy = () => {
        if(_enemy == 'player') _enemy = 'AI';
        else _enemy = 'player';
        reset()
    }
    const setMarker = (id, newMark) => {
        if(players[+!id].mark == newMark) return false;
        else {
            players[id].mark = newMark;
            return true;
        }
        
    }
    const setDifficulty = (scale) => {
        difficulty = scale
    }
    const getDifficulty = () => {
        return difficulty;
    }
    return {
        mark,
        getStatus,
        getLine,
        getEnemy,
        reset,
        toggleEnemy,
        setDifficulty,
        setMarker,
        getDifficulty
    }
})();


const displayController = (() => {
    const game = document.getElementById("game");
    const msg = document.getElementById(`message`);
    const overlay = document.getElementById(`overlay`);
    const reset = document.getElementById(`reset`);
    const scaleUI = document.getElementById(`difficulty`);
    const markers = Array.from(document.getElementsByClassName(`mark-select-container`));
    const humanBtn = document.getElementById('human');
    const aiBtn  = document.getElementById('ai');
    const scales = Array.from(document.getElementsByClassName('scale-btn'));
    let onBot = false;

    
    const setLane = (state, line) => {
        line.forEach((x) => {
            const cell = document.getElementById(`cell${x}`);
            cell.classList.add(state)
        })
    }
    const endGame = () => {
        overlay.classList.toggle('visible')
    }
    const removeClass = (container, c) => {
        container.forEach((button) => {
            button.classList.remove(c);
        });
    }
    const setDisabled = (button) =>{
        button.classList.add('disabled');
    }
    const hide = (node) =>{
        node.classList.remove('visible');
    }
    const createGrid = () =>{
        document.getElementById('board').remove()
        const board = document.createElement('div')
        board.id = "board";
        board.className = "board";
        board.onclick = () => {
            hide(scaleUI);
            onBot = false;
        }
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                const cell = document.createElement('div')
                cell.id = `cell${i*3 + j}`;
                cell.className = "btn cell";
                cell.onclick = function(){
                    if(!cell.firstChild){
                        const play = gameController.mark(i,j, 'X');
                        const current = document.createElement('div');
                        current.className = "pop";
                        if(gameController.getEnemy() == 'AI'){
                            current.textContent = play.prev;
                            const target = document.getElementById(`cell${play.x * 3 + play.y}`);
                            if(target != null){
                                const move = document.createElement('div');
                                move.className = "pop";
                                move.textContent = play.mark;
                                target.appendChild(move)
                            }
                        }else{
                            current.textContent = play.mark;
                        }
                        this.appendChild(current)
                        const state = gameController.getStatus();
                        let winner = "draw";
                        let lane = [0,1,2,3,4,5,6,7,8];
                        if(state != 'play'){
                            if(state != 'draw'){
                                msg.textContent = `${play.name} wins`;
                                reset.classList.add(play.mark);
                                winner = play.mark;
                                lane = gameController.getLine()
                            }else {
                                reset.classList.add('draw');
                                msg.textContent = `It's a draw`;
                            }
                            setLane(winner, lane)
                            endGame()
                        }
                    }    
                } 
                board.appendChild(cell);
            }
        }
        game.append(board);
    }
    const changeEnemy = () => {
        gameController.toggleEnemy();
        createGrid()
    }
    const setActive = (button, disable) =>{
        disable.classList.remove('active');
        disable.classList.remove('X');
        button.classList.add('active');
        button.classList.add('X');
    }
    const resetGame = () => {
        gameController.reset();
        createGrid();
    }

    aiBtn.onclick = function() {
        scaleUI.classList.add('visible');
        if(onBot){
            onBot = false;
            hide(scaleUI);
        }
        if(humanBtn.classList.contains('active'))   {
            onBot = true;
            changeEnemy();
            this.textContent = gameController.getDifficulty().toUpperCase();
            setActive(this, humanBtn)
        }
    }
    humanBtn.onclick = function(){
        if(!this.classList.contains('active')){
            changeEnemy();
            hide(scaleUI);
            setActive(this, aiBtn)
            aiBtn.textContent = "V.S AI";
        }
    }
    reset.onclick = () =>{
        reset.className = "btn menu-btn"
        overlay.classList.toggle('visible')
        resetGame()
    }

    markers.forEach((container, idx) => {
        let children = Array.from(container.children);
        children.forEach((button, i)=>{
                button.onclick = function() {
                    if(gameController.setMarker(idx, button.textContent)){
                        removeClass(Array.from(markers[+!idx].children),'disabled');
                        removeClass(children,'active');
                        console.log(button)
                        button.classList.add('active');
                        setDisabled(Array.from(markers[+!idx].children)[i]);
                        resetGame();
                    }
                }
            
        })
    });
    scales.forEach((button) => {
        button.onclick = () =>{
            onBot = false;
            gameController.setDifficulty(button.id);
            removeClass(scales, 'X');
            aiBtn.textContent = button.id.toUpperCase();
            button.classList.add('X');
            scaleUI.classList.remove('visible');
            resetGame();
        }
    })
    // game.onclick = () => {hide(scaleUI)}
    
    
    return {
        createGrid
    }
})();

window.onload = () =>{
    displayController.createGrid()
}