alert (
  "Rulesπ\nNote: Follow the rules correctly otherwise it will not work\n1. First select the limit of random numbersn\n2. Select the limit of guesses\n3. Input your guessed number in the empty box"
)
const slider = document.querySelector("input");
const value = document.querySelector(".value");
 value.textContent = slider.value;

slider.oninput = function () {
    value.textContent = this.value;
    value.value = value.textContent;
    let maxNum = value.value;
   
    const limit_input  =document.querySelector("#limit")
    const guess_limit = document.querySelector("#guess_limit");

    limit_input.oninput = function () {
        guess_limit.textContent = limit_input.value;
        
        let numGuesses = 0;
        let limit = limit_input.value;

        let randNum = Math.floor((Math.random() * maxNum) + 1)
        let status = document.getElementById("status")
        const user = document.querySelector("#user");
        user.oninput = function () {
            console.log(user.value)
            if (numGuesses < limit) {
                do {
                    if (user.value > randNum) {
                        status.textContent = "Your guess was too high !!β‘"
                        numGuesses++;
                        console.log("guesses =" + numGuesses)
                        break;
                    }
                    else if (user.value < randNum) {
                        status.textContent = "Your guess was too low !!π"
                        numGuesses = numGuesses + 1;
                        console.log("guesses =" + numGuesses)
                        break;
                    }
                    else if (user.value == randNum) {
                        status.textContent = "Yay you guessed it correctly you won !!π₯³ππ₯"
                        numGuesses = numGuesses + 1;
                        console.log("guesses =" + numGuesses)
                        break;
                    }
                    else {
                        status.textContent = "Your guess was out of desired parameters  try guessing in numbers !!"
                        numGuesses = numGuesses - 1;
                        console.log("guesses =" + numGuesses)
                        break;
                    }
                } while (numGuesses < maxNum && user != randNum);
            } else {
                status.textContent = "Sorry you reached the maximum limit!";
            }
            }  
        }
     
    }
