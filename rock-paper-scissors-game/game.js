function getRandomComputerResult() {
    const options = ["石头", "布", "剪刀"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function hasPlayerWonTheRound(player, computer) {
    return (
        (player === "石头" && computer === "剪刀") || (player === "剪刀" && computer === "布") || (player === "布" && computer === "石头")
    );
}

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();

    if (hasPlayerWonTheRound(userOption, computerResult)) {
        playerScore++;
        return `玩家 获胜！ ${userOption} 大于 ${computerResult}`
    }else if (computerResult === userOption) {
        return `平局！ 双方都选择了 ${userOption}`;
    }else {
        computerScore++;
        return `电脑 获胜！ ${computerResult} 大于 ${userOption}`;
    }
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
    roundResultsMsg.innerText = getRoundResults(userOption);
    computerScoreSpanElement.innerText = computerScore;
    playerScoreSpanElement.innerText = playerScore;
  
   if (playerScore === 3 || computerScore === 3) {
  winnerMsgElement.innerText = `${playerScore === 3 ? "Player":"Computer"} has won the game!`;
  
  resetGameBtn.style.display = "block";
  optionsContainer.style.display = "none";
  };
  };

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function () {
  showResults("石头");
});

paperBtn.addEventListener("click", function () {
  showResults("布");
});

scissorsBtn.addEventListener("click", function () {
  showResults("剪刀");
});