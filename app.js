// Make the board in an array
let play_board = ["", "", "", "", "", "", "", "", ""]
let gameActive = true;
let currentPlayer = "X";
let avatarX = "";
let avatarO = "";
let pickAvatarX = "";
let pickAvatarO = "";


const closeMenu = () => {
    document.getElementsByClassName("settings")[0].id = "settings-menu-close"
    document.getElementsByClassName("controlsNav")[0].id = "controls"
}


// let markX = chooseAvatarX()
// let markO = chooseAvatarO()

// Player Profile
const playerProfile = () => {
    if (currentPlayer === "X") {
        document.getElementById()
    }
}

// Clear Default Text in Input Text
const clearDefaultText1 = () => {
    if (document.getElementById("player-X-name").value === "Enter Player X Name") {
        document.getElementById("player-X-name").value = ""
    } else {
        return;
    }
}

const clearDefaultText2 = () => {
    if (document.getElementById("player-O-name").value === "Enter Player O Name") {
        document.getElementById("player-O-name").value = ""
    } else {
        return;
    }
}

// Default Text on Mouse Leave
const defaultText1 = () => {
    if (document.getElementById("player-X-name").value.length > 0 && document.getElementById("player-X-name").value !== "Enter Player X Name") {
        document.getElementById("winner").innerHTML = "It's " + document.getElementById("player-X-name").value + "'s turn"
        document.getElementsByClassName("playerChoose")[0].innerHTML = "Choose Your Pokemon, " + document.getElementById("player-X-name").value
        return changePlayerNameX();
    } else {
        document.getElementById("player-X-name").value = "Enter Player X Name"
    }
}

const defaultText2 = () => {
    if (document.getElementById("player-O-name").value.length > 0) {
        return changePlayerNameO();
    } else {
        document.getElementById("player-O-name").value = "Enter Player O Name"
    }
}

// Change Player's Name
const changePlayerNameX = () => {
    if (document.getElementById("player-X-name").value === "Enter Player X Name") {
        return;
    } else {
        document.getElementById("playerX").innerHTML = document.getElementById("player-X-name").value
    }
}

const changePlayerNameO = () => {
    if (document.getElementById("player-O-name").value === "Enter Player O Name") {
        return;
    } else {
        document.getElementById("playerO").innerHTML = document.getElementById("player-O-name").value
    }
}

// Play and Pause Background Sound
const backgroundSound = () => {
    document.getElementById("background-sound").play()
}

const muteBackgroundSound = () => {
    document.getElementById("background-sound").pause()
}


// Update Player's Name in Winning and Player's Turn Statements
const newPlayerNames = () => {
    if (currentPlayer === "X") {
        return newPlayerName = document.getElementById("playerX").innerHTML
    } else {
        return newPlayerName = document.getElementById("playerO").innerHTML
    }
}


// Winning Message
const winningMessage = (newPlayerName) => `${newPlayerName} has won!`;
const drawMessage = () => "Game ended in a draw!";
const currentPlayerTurn = () => `It's ${newPlayerNames()}'s turn`;

const statusDisplay = document.getElementById("winner")
statusDisplay.innerHTML = currentPlayerTurn()

const boardContainer = document.getElementsByClassName("play-area")

// Change Players
const playerChange = (newPlayerNames) => {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn(newPlayerNames);
}


// Open Menu Settings
const openMenu = () => {
    document.getElementsByClassName("settings")[0].id = "settings-menu-open";
    document.getElementById("controls").id = "controls-change";
    document.getElementsByClassName("controlsNav")[0].id = "controls-hide"
    pickAvatarX = document.getElementsByClassName("playerChoose")[0].innerHTML = "Choose Your Pokemon, " + document.getElementById("playerX").innerText + "!!!"
}

// Choose Avatar
const chooseAvatar = (number) => {
    if (avatarX.length === 0 || avatarO.length === 0) {
        if (currentPlayer === "X") {
            avatarX = document.getElementById("avatar" + number).innerHTML
            pickAvatarO = document.getElementsByClassName("playerChoose")[0].innerHTML = "Choose Your Pokemon, " + document.getElementById("playerO").innerText + "!!!"
        }
        if (currentPlayer === "O") {
            avatarO = document.getElementById("avatar" + number).innerHTML
        } 
        playerChange(currentPlayer)
    }
}



// Player's Move
const addPlayerMove = (num) => {
    if (gameActive === true) {
        block = document.getElementById("block_" + num)
        if (currentPlayer === "X") {
            if (block.innerHTML.length === 0) {
                if (avatarX !== "") {
                block.innerHTML = avatarX
                block.style.color = "MidnightBlue"
                play_board[num] = "X"
                document.getElementById("block_" + num).className = "occupied"
                playerChange(newPlayerNames())
                } else {
                block.innerHTML = "X"
                block.style.color = "MidnightBlue"
                play_board[num] = "X"
                document.getElementById("block_" + num).className = "occupied"
                playerChange(newPlayerNames())
                }
            } else {
                currentPlayer = "X"
            }

        } else {
            if (block.innerHTML.length === 0) {
                if (avatarX !== "") {
                block.innerHTML = avatarO
                block.style.color = "salmon"
                play_board[num] = "O"
                document.getElementById("block_" + num).className = "occupied"
                playerChange(newPlayerNames())
                } else {
                block.innerHTML = "O"
                block.style.color = "salmon"
                play_board[num] = "O"
                document.getElementById("block_" + num).className = "occupied"
                playerChange(newPlayerNames())
                }
            } else {
                currentPlayer = "O"
            }
        }
        resultValidation();
    }
}

// Reset Board
const resetBoard = () => {
    gameActive = true;
    currentPlayer = "X";
    play_board = ["", "", "", "", "", "", "", "", ""];
    document.getElementById("strike").className = "strike-line"
    statusDisplay.innerHTML = currentPlayerTurn();
    for (i = 0; i < 9; i++) {
        if (document.getElementById("block_" + i).className === "occupied") {
            document.getElementById("block_" + i).className = "block"
            document.getElementById("block_" + i).innerHTML = ""
        } else {
            document.getElementById("block_" + i).innerHTML = ""
        }
    }
}

// Reset Score
const resetScore = () => {
    document.getElementsByClassName("playerScore")[0].innerHTML = 0
    document.getElementsByClassName("playerScore")[1].innerHTML = 0
}

// Play audio
const winAudio = () => {
    document.getElementById("win-audio").play()
}

const drawAudio = () => {
    document.getElementById("draw-audio").play()
}

// Check Result
// const winningConditions = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];

const winningConditions = [
    // rows
    { combo: [0, 1, 2], strikeClass: "strike-row-1" },
    { combo: [3, 4, 5], strikeClass: "strike-row-2" },
    { combo: [6, 7, 8], strikeClass: "strike-row-3" },
    // columns
    { combo: [0, 3, 6], strikeClass: "strike-column-1" },
    { combo: [1, 4, 7], strikeClass: "strike-column-2" },
    { combo: [2, 5, 8], strikeClass: "strike-column-3" },
    // diagonal
    { combo: [0, 4, 8], strikeClass: "strike-diagonal-1" },
    { combo: [2, 4, 6], strikeClass: "strike-diagonal-2" },
]

const resultValidation = () => {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i].combo;
        let a = play_board[winCondition[0]];
        let b = play_board[winCondition[1]];
        let c = play_board[winCondition[2]];
        if (a === "" || b === "" || c === "") {
            continue;
        }
        if (a === b && b === c) {
            if (currentPlayer === "X") {
                currentPlayer = "O"
            } else {
                currentPlayer = "X"
            }
            roundWon = true
            strikeApp = winningConditions[i].strikeClass
            break;
        }
    } if (roundWon) {
        gameActive = false
        winAudio()
        document.getElementById("strike").className = strikeApp
        statusDisplay.innerHTML = setTimeout(() => {
            alert(winningMessage(newPlayerNames()))
        }, 1000)
        statusDisplay.innerHTML = winningMessage(newPlayerNames())
        score = parseInt(document.getElementById("playerScore" + currentPlayer).innerHTML)
        score += 1
        document.getElementById("playerScore" + currentPlayer).innerHTML = score
    } else {
        let roundDraw = !play_board.includes("")
        if (roundDraw) {
            gameActive = false;
            drawAudio()
            statusDisplay.innerHTML = alert(drawMessage())
            statusDisplay.innerHTML = drawMessage()
        }
    }

}

// Strikethrough
const strike = () => {
    document.getElementById("strike")
}

const startGame = () => {
    document.getElementsByClassName("template")[0].id = "templateBeforeHide"
    document.getElementsByClassName("mainInterface")[0].id = "mainAppear"
}
