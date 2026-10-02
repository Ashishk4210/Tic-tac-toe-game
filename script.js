const symbols = document.querySelectorAll('.symbol');
const turn = document.querySelector('.turn');
const newGame = document.querySelector('.new-game')
console.log(symbols)


//Turn-Logic

symbols.forEach(symbol => {
    symbol.addEventListener('click', function(){
        symbols.forEach(symbol => {
            symbol.classList.toggle("active");
        })
        if(symbol.classList.contains("active")){
            symbol.style.border = "1px solid #FF75A8";
            symbol.innerHTML = `<p>X</p>`;
            symbol.lastChild.style.display = "block";
            symbol.lastChild.style.color = "#FF75A8";
            turn.innerHTML = "Your turn, Player O!"
        }
        else{
            symbol.style.border = "1px solid #FFC45C";
            symbol.innerHTML = `<p>O</p>`;
            symbol.lastChild.style.display = "block";
            symbol.lastChild.style.color = "#FFC45C";
            turn.innerHTML = "Your turn, Player X!"
        }
    }, {once: true});
});

//New Game Logic

newGame.addEventListener('click', function(){
    symbols.forEach(symbol => {
        symbol.classList.remove('active');
        symbol.style.border = "none";
        symbol.style.borderBottom = "5px solid #35223B";
        symbol.lastChild.style.display = "none";
        turn.innerHTML = "Your turn, Player X!"
    })
})

//Winning Logic