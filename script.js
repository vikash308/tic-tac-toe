const items = document.querySelectorAll('.item');
const message = document.getElementById('message');
const reset = document.getElementById('reset');
let currentPlayer = 'x';

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

items.forEach(item => item.addEventListener('click', () => {
    console.log("checked");
    if (currentPlayer == 'x') {
        item.innerHTML = 'X';
        message.textContent = "Player O's turn"
        currentPlayer = 'o';
    }
    else {
        item.innerHTML = 'O'
        message.innerText = "Player X's turn"
        currentPlayer = 'x'
    }
    item.disabled = true;
    checkwin();
}
));

function checkwin(){
    for (let element of winPatterns) {
        let first = items[element[0]].innerText;
        let second = items[element[1]].innerText;
        let third = items[element[2]].innerText;
        
        if(first != "" && second != "" && third != ""){
            if(first ===second && second === third){
                console.log('you winn')
                document.getElementById('winnerText').innerText = `Player ${first} Wins the Game!`
                items[element[0]].style.background = 'green';
                items[element[1]].style.background = 'green';
                items[element[2]].style.background = 'green';
               for (let item of items) {
                    item.disabled = true;
               }
               openpopup();
                
            }
        }
    }
}
function openpopup(){
    document.getElementById("popup").classList.add("showpopup")
    document.getElementById("overlay").classList.add("overlay") ;
    document.getElementById("btn").addEventListener("click", closepopup
    )  
}
function closepopup(){
    document.getElementById("popup").classList.remove("showpopup")
    document.getElementById("overlay").classList.remove("overlay") ;
    for (let element of items) {
        element.disabled = false;
        element.textContent = "";
        element.style.background = "#2c3e50";
    }
    
}

reset.addEventListener("click", ()=>{
    currentPlayer = 'x'
    for (let element of items) {
        element.disabled = false;
        element.textContent = "";
        element.style.background = "#2c3e50";
    }
    message.innerText = "Player X's turn"
})
