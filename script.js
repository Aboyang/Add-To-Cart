const cellUnclick_00 = document.getElementById("cellUnclick_00")
const cellX_00 = document.getElementById("cellX_00")
const cellO_00 = document.getElementById("cellO_00")

const cellUnclick_01 = document.getElementById("cellUnclick_01")
const cellX_01 = document.getElementById("cellX_01")
const cellO_01 = document.getElementById("cellO_01")

const cellUnclick_02 = document.getElementById("cellUnclick_02")
const cellX_02 = document.getElementById("cellX_02")
const cellO_02 = document.getElementById("cellO_02")

const cellUnclick_10 = document.getElementById("cellUnclick_10")
const cellX_10 = document.getElementById("cellX_10")
const cellO_10 = document.getElementById("cellO_10")

const cellUnclick_11 = document.getElementById("cellUnclick_11")
const cellX_11 = document.getElementById("cellX_11")
const cellO_11 = document.getElementById("cellO_11")

const cellUnclick_12 = document.getElementById("cellUnclick_12")
const cellX_12 = document.getElementById("cellX_12")
const cellO_12 = document.getElementById("cellO_12")

const cellUnclick_20 = document.getElementById("cellUnclick_20")
const cellX_20 = document.getElementById("cellX_20")
const cellO_20 = document.getElementById("cellO_20")

const cellUnclick_21 = document.getElementById("cellUnclick_21")
const cellX_21 = document.getElementById("cellX_21")
const cellO_21 = document.getElementById("cellO_21")

const cellUnclick_22 = document.getElementById("cellUnclick_22")
const cellX_22 = document.getElementById("cellX_22")
const cellO_22 = document.getElementById("cellO_22")

const winX = document.getElementById("winX")
const winO = document.getElementById("winO")
const tie = document.getElementById("tie")
const blocker = document.getElementById("blocker")

const scoreboardX = document.getElementById("scoreboardX")
const scoreboardO = document.getElementById("scoreboardO")

let count = 0
let game = 0
let scoreX = 0
let scoreO = 0
let board = []

for (let i=0; i<3; i++) {
    board[i] = ["","",""]
}

let win = false

cellUnclick_00.onclick = ()=> {
    
    if (count % 2 == 0) {
        cellX_00.style.zIndex = 2
        board[0][0] = "x"
    }
    else {
        cellO_00.style.zIndex = 2
        board[0][0] = "o"
    }

    count +=1
    check()

}

cellUnclick_01.onclick = ()=> {
    
    if (count % 2 == 0) {
        cellX_01.style.zIndex = 2
        board[0][1] = "x"
    }
    else {
        cellO_01.style.zIndex = 2
        board[0][1] = "o"
    }

    count +=1
    check()

}

cellUnclick_02.onclick = ()=> {

    if (count % 2 == 0) {
        cellX_02.style.zIndex = 2
        board[0][2] = "x"
    }
    else {
        cellO_02.style.zIndex = 2
        board[0][2] = "o"
    }

    count +=1
    check()

}

cellUnclick_10.onclick = ()=> {

    if (count % 2 == 0) {
        cellX_10.style.zIndex = 2
        board[1][0] = "x"
    }
    else {
        cellO_10.style.zIndex = 2
        board[1][0] = "o"
    }

    count +=1
    check()

}

cellUnclick_11.onclick = ()=> {

    if (count % 2 == 0) {
        cellX_11.style.zIndex = 2
        board[1][1] = "x"
    }
    else {
        cellO_11.style.zIndex = 2
        board[1][1] = "o"
    }

    count +=1
    check()

}

cellUnclick_12.onclick = ()=> {

    if (count % 2 == 0) {
        cellX_12.style.zIndex = 2
        board[1][2] = "x"
    }
    else {
        cellO_12.style.zIndex = 2
        board[1][2] = "o"
    }

    count +=1
    check()

}

cellUnclick_20.onclick = ()=> {

    if (count % 2 == 0) {
        cellX_20.style.zIndex = 2
        board[2][0] = "x"
    }
    else {
        cellO_20.style.zIndex = 2
        board[2][0] = "o"
    }

    count +=1
    check()

}

cellUnclick_21.onclick = ()=> {

    if (count % 2 == 0) {
        cellX_21.style.zIndex = 2
        board[2][1] = "x"
    }
    else {
        cellO_21.style.zIndex = 2
        board[2][1] = "o"
    }

    count +=1
    check()

}

cellUnclick_22.onclick = ()=> {

    if (count % 2 == 0) {
        cellX_22.style.zIndex = 2
        board[2][2] = "x"
    }
    else {
        cellO_22.style.zIndex = 2
        board[2][2] = "o"
    }

    count +=1
    check()
}

function check() {
    //check horizontal
    for (let i=0; i<3; i++) {
        if (board[i][0] != "" && board[i][0] == board[i][1] && board[i][0] == board[i][2]) {
            win = true
        }
    }
    
    //check vertical
    for (let j=0; j<3; j++) {
        if (board[0][j] != "" && board[0][j] == board[1][j] && board[0][j] == board[2][j]) {
            win = true
        }
    }

    //check downsloping diagonal
    if (board[0][0] != "" && board[0][0] == board[1][1] && board[0][0 ]== board[2][2]) {
        win = true
    }

    //check upsloping diagonal
    if (board[0][2] != "" && board[0][2] == board[1][1] && board[0][2] == board[2][0]) {
        win = true
    }

    //check for tie
    if (count == 9 && !win) {
        tie.classList.add('active')
        setTimeout(refresh, 1500)
    }
    
    if (win) {
        
        blocker.style.zIndex = 2

        setTimeout(displayWin, 600)

        setTimeout(refresh, 3000)
        
        win = false
    }
}

function refresh() {

    cellO_00.style.zIndex = 0
    cellX_00.style.zIndex = 0
    cellO_01.style.zIndex = 0
    cellX_01.style.zIndex = 0
    cellO_02.style.zIndex = 0
    cellX_02.style.zIndex = 0
    cellO_10.style.zIndex = 0
    cellX_10.style.zIndex = 0
    cellO_11.style.zIndex = 0
    cellX_11.style.zIndex = 0
    cellO_12.style.zIndex = 0
    cellX_12.style.zIndex = 0
    cellO_20.style.zIndex = 0
    cellX_20.style.zIndex = 0
    cellO_21.style.zIndex = 0
    cellX_21.style.zIndex = 0
    cellO_22.style.zIndex = 0
    cellX_22.style.zIndex = 0

    if (count == 9 && !win) {
        tie.classList.remove('active')
    }

    if ((count - 1)%2 == 0) {
        winX.classList.remove('active') //to perform the transformation
    } else {
        winO.classList.remove('active')
    }


    if (game%2 == 0) {
        count = 1
    } else {
        count = 0
    }

    for (let i=0; i<3; i++) {
        board[i] = ["","",""]
    }

    game +=1
}

function displayWin() {

    blocker.style.zIndex = 0

    if ((count - 1)%2 == 0) {
        winX.classList.add('active') //to perform the transformation
        scoreX += 1
        scoreboardX.innerText = scoreX
    } else {
        winO.classList.add('active')
        scoreO += 1
        scoreboardO.innerText = scoreO
    }
}