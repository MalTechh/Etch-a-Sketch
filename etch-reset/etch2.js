function setBoard(size){
let board = document.querySelector(".etch")
    let squares = document.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "white")
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;

    amount = size * size;
    for(i=0 ; i<amount; i++){
        let square = document.createElement("div");
        square.addEventListener("mouseover", colorSquare)
        square.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend" , square);
    

        }
}
setBoard(32)

function changeSize(input){
    if(input > 2 && input <= 100){
        setBoard(input);
    }else 
    console.log("too many squares!");
    }

function colorSquare(){
    if (color == 'random'){
        this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`
    }else
        this.style.backgroundColor = color;
}

    function colorChange(chioce){
        color = chioce;
    }

    function boardReset(){
        let board = document.querySelector(".etch")
    let squares = document.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "white")
    }