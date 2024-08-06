document.addEventListener("DOMContentLoaded", () => {
    const choices = ["rock", "paper", "scissors"];
    let userChoice = "";
    let userScore = 0;
    let compScore = 0;

    const pickwin = document.querySelector('.pickwin'); // Correct selector for displaying result

    const pickButton = document.querySelector("button");
    pickButton.disabled = true;

    document.querySelectorAll(".choice").forEach(choiceElement => {
        choiceElement.addEventListener("click", () => {
            userChoice = choiceElement.classList[0];
            document.querySelectorAll(".choice").forEach(el => el.classList.remove("selected"));
            choiceElement.classList.add("selected");
            pickButton.disabled = false;
        });
    });

    pickButton.addEventListener("click", () => {
        if (!userChoice) {
            alert("Please select an option!");
            return;
        }

        const compChoice = choices[Math.floor(Math.random() * choices.length)];

        let result = `You chose ${userChoice}, computer chose ${compChoice}. `;
        if (userChoice === compChoice) {
            result += "Match is a draw!";
        } else if (
            (userChoice === "rock" && compChoice === "scissors") ||
            (userChoice === "paper" && compChoice === "rock") ||
            (userChoice === "scissors" && compChoice === "paper")
        ) {
            result += "Winner is you!";
            userScore++;
        } else {
            result += "Winner is computer!";
            compScore++;
        }
        alert(result); // Correct syntax for setting the text
        document.querySelector(".you").textContent = `You: ${userScore}`;
        document.querySelector(".comp").textContent = `Comp: ${compScore}`;
        pickButton.disabled = true;
        document.querySelectorAll(".choice").forEach(el => el.classList.remove("selected"));
        userChoice = "";
    });
});