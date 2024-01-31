let color = "black";

document.addEventListener("DOMContentLoaded",function(){
    createBoard(16);


    let btnValue = document.querySelector("#popup")
    btnValue.addEventListener("click",function(){
        let size = getSize();
        createBoard(size);
    })
})

function createBoard(size){

    let board = document.querySelector(".drawing-board")
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows =  `repeat(${size},1fr)`;

    let numberOfbox = size * size;
    
    for (let i = 0; i < numberOfbox; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover",colorDiv)
        board.insertAdjacentElement("beforeend",div)
    }
}


function getSize(){
    let userSize = prompt("Enter the size of grid [nxn]:")
    let message = document.querySelector('#message')
    if (userSize == "")
    {
        message.innerHTML = "Enter a valid number";
    }
    else if (userSize > 100 || userSize <0 ){
        message.innerHTML = "Enter a valid number between 1 and 100";
    }
    else{
        message.innerHTML = "You can start drawing"
        return userSize;
    }
}

function colorDiv(){

    if(color == "random"){
            this.style.backgroundColor = `hsl(${Math.random() * 360 },100% ,50%)`
    }
    else{
            this.style.backgroundColor = "black"
    }
    
}

function setColor(colorChoice){
    color = colorChoice;
}

function resetBoard(){
    let divs = document.querySelectorAll("div")
    divs.forEach((div)=> div.style.backgroundColor="white")
}