var tableBody = document.getElementById("high-scores-tbody");
var clearBtn = document.getElementById("clear");

clearBtn.addEventListener("click", function () {
  localStorage.setItem("quiz-scores", JSON.stringify([]));
  location.reload();
});

function populateTable() {
  //read scores from local storage
  var scoresArray = JSON.parse(localStorage.getItem("quiz-scores"));
  scoresArray.forEach((entry) => {
    //create a table row
    var newRow = document.createElement("tr");
    newRow.innerHTML = `
    <td>${entry.username}</td>
    <td>${entry.score}</td>
    `;
    //append the row to the table
    tableBody.append(newRow);
  });
}

populateTable();
