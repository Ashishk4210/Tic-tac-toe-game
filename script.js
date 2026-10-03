const symbols = document.querySelectorAll('.symbol');
const turnIndicator = document.querySelector('.turn');
const newGame = document.querySelector('.new-game')



//Turn-Logic
let currentPlayer = "X";
symbols.forEach(symbol => {
    symbol.addEventListener('click', function(){
        if(symbol.classList.contains("X") || symbol.classList.contains("O")){
            return;
        }
        if(currentPlayer === "X"){
            symbol.classList.add("X");
            symbol.style.border = "1px solid #FF75A8";
            symbol.innerHTML = `<p>X</p>`;
            symbol.lastChild.style.display = "block";
            symbol.lastChild.style.color = "#FF75A8";
            turnIndicator.innerHTML = "Your turn, Player O!";
            currentPlayer = "O";
        }
        else{
            symbol.classList.add("O");
            symbol.style.border = "1px solid #FFC45C";
            symbol.innerHTML = `<p>O</p>`;
            symbol.lastChild.style.display = "block";
            symbol.lastChild.style.color = "#FFC45C";
            turnIndicator.innerHTML = "Your turn, Player X!";
            currentPlayer = "X";
        }
    });
});

//New Game Logic

newGame.addEventListener('click', function(){
    currentPlayer = "X";
    symbols.forEach(symbol => {
        symbol.classList.remove('X', 'O');
        symbol.innerHTML = `<p>0</p>`;
        symbol.style.border = "none";
        symbol.style.borderBottom = "5px solid #35223B";
        symbol.lastChild.style.display = "none";
    })
    turnIndicator.innerHTML = "Your turn, Player X!";
})

//Win/Draw Logic