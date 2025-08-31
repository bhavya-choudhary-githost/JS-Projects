const minnum = Math.floor(Math.random() * 50);
const maxnum = Math.floor(Math.random() * 50) + 50;
const answer = Math.floor(Math.random() * (maxnum - minnum + 1)) + minnum;

let guess;
let attempts = 0;
let running = true;

while (running) {
    guess = window.prompt(`Please enter a number between ${minnum} - ${maxnum}`);
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert("Please enter a valid number");
    }
    else if (guess < minnum || guess > maxnum) {
        window.alert(`You should enter a number between ${minnum} - ${maxnum}`);
    }
    else if (guess > answer) {
        attempts++;
        window.alert("Too high, try again!!!");
    }
    else if (guess < answer) {
        attempts++;
        window.alert("Too low, try again!!!");
    }
    else {
        attempts++;
        window.alert(`🎉 Congratulations!! You win, it took you ${attempts} tries`);
        running = false;
    }
}
