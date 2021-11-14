var highScore = document.querySelector("#HighScores");

var clearHighScores = document.querySelector("#clear");


clearHighScores.addEventListener("click", function () {
  localStorage.clear();
  highscores();
});


highscores();

function highscores() {

  if (localStorage.getItem("HighScores") === null) {
    highScore.textContent = "No highscores available.";
  } else {
    var HighScoreEL = localStorage.getItem("HighScores");
    var HighScoreObject = JSON.parse(HighScoreEL);

    var highscoreLi = document.createElement("ol");
    highscoreLi.classList.add("highscoreBackground");
    highScore.appendChild(highscoreLi);
    var questionList;


    if (HighScoreObject.length) {

      for (var x in HighScoreObject) {
        questionList = document.createElement("li");
        questionList.innerHTML = `initials: ${HighScoreObject[x].initials} | score: ${HighScoreObject[x].score}`;
        highscoreLi.appendChild(questionList);

      }

    } else {

      questionList = document.createElement("li");
      questionList.innerHTML = `initials: ${HighScoreObject.initials} | score: ${HighScoreObject.score}`;
      highscoreLi.appendChild(questionList);

    }

  }

}

		
