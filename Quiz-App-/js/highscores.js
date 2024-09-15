const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// add some li to our ul:
highScoresList.innerHTML = highScores
.map(score => {
   return `<li class= "high-score">${score.name} - ${score.score}</li>`;
}).join(""); //getting a srting with all my li

