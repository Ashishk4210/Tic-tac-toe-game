const symbols = document.querySelectorAll('.symbol');
const turnIndicator = document.querySelector('.turn');
const newGame = document.querySelector('.new-game');
const winner = document.querySelector('.winner');
const modal = document.querySelector('.modal-container');


//Turn-Logic
let currentPlayer = "X";
let board = ['','','','','','','','',''];
symbols.forEach((symbol, index) => {
    symbol.addEventListener('click', function(){
        if(symbol.classList.contains("X") || symbol.classList.contains("O")){
            return;
        }
        if(currentPlayer === "X"){
            symbol.classList.add("X");
            board[index] = "x";
            symbol.innerHTML = `<p>X</p>`;
            symbol.style.border = "1px solid #FF75A8";
            symbol.lastChild.style.display = "block";
            symbol.lastChild.style.color = "#FF75A8";
            turnIndicator.innerHTML = "Your turn, Player O!";
            currentPlayer = "O";
        }
        else{
            symbol.classList.add("O");
            board[index] = 'o';
            symbol.innerHTML = `<p>O</p>`;
            symbol.style.border = "1px solid #FFC45C";
            symbol.lastChild.style.display = "block";
            symbol.lastChild.style.color = "#FFC45C";
            turnIndicator.innerHTML = "Your turn, Player X!";
            currentPlayer = "X";
        }
    });
});

//New Game Logic
function NewGame(){
    currentPlayer = "X";
    symbols.forEach(symbol => {
        symbol.classList.remove("X","O");
        board = ['','','','','','','','',''];
        symbol.innerHTML = `<p>0</p>`;
        symbol.style.border = "none";
        symbol.style.borderBottom = "5px solid #35223B";
        symbol.lastChild.style.display = "none";
    })
    turnIndicator.innerHTML = "Your turn, Player X!";
}
newGame.addEventListener('click', NewGame)

//Win/Draw Logic

const winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

symbols.forEach(symbol => {
    symbol.addEventListener('click',function(){
        for (let i = 0; i < winningCombinations.length; i++) {
                if(board[winningCombinations[i][0]] === 'x'&&board[winningCombinations[i][1]] === 'x'&&board[winningCombinations[i][2]] === 'x'){
                    winner.textContent = "X Wins";
                    modal.style.display = "block";
                }
                else if(board[winningCombinations[i][0]] === 'o'&&board[winningCombinations[i][1]] === 'o'&&board[winningCombinations[i][2]] === 'o'){
                    winner.textContent = "O Wins";
                    modal.style.display = "block";
                }
            }
            if(!board.includes("")){
                winner.textContent = "Draw";
                modal.style.display = "block";
        }
    })
})

window.addEventListener('click',function(e){
    if(e.target === modal){
        modal.style.display = "none";
    }
})