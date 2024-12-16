
export function removeLocalStorage() {
    console.log("remove local storage");
    localStorage.removeItem("agreeToWaiver");
    localStorage.removeItem("userAttributes");
    localStorage.removeItem("gameStatsID");
    localStorage.removeItem("gameScoreID");
    localStorage.removeItem("gameID");
    localStorage.removeItem("gameName");
    localStorage.removeItem("teamName");
    localStorage.removeItem("gameTime")
    localStorage.removeItem("gameHintVisible");
    localStorage.removeItem("timeStart");
    localStorage.removeItem("realTimeEnd");
    localStorage.removeItem("gameNotes");
    localStorage.removeItem("gameTimeHint");
    localStorage.removeItem("clues");
    localStorage.removeItem("cluesArray");
    localStorage.removeItem("gamePuzzleSolved");
    localStorage.removeItem("gamePuzzleGuess");
    localStorage.removeItem("gamePuzzleAnswer");
    localStorage.removeItem("gamePuzzleAnswerCorrect");
}