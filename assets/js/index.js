document.addEventListener('DOMContentLoaded', () => {
    const cubes = document.querySelectorAll('.grid div');
    const scoreDisplay = document.querySelector('span');
    const isRunning = document.querySelector('.start-game');
    const width = 10;
    let lastIndex = 0;
    let applePos = 0;
    let snakePos = [2, 1, 0];
    let direction = 1;
    let score = 0;
    let speed = 1;
    let intervalTime = 1000;
    let interval = 0;

    
    // start game function
    function startGame(){
        
        // remove the snake class from the div when game starts..
        snakePos.forEach(index => cubes[index].classList.remove('snake'));

        // remove the apple class from the div when game starts..
        cubes[applePos].classList.remove('apple');
        clearInterval(interval);

        // reset these values from above
        score = 0;
        randomApplePos();
        direction = 1;
        scoreDisplay.innerText = score;
        intervalTime = 1000;
        snakePos = [2, 1, 0];
        lastIndex = 0;

        // add the snake back to the game after values are reset
        snakePos.forEach(index => cubes[index].classList.add('snake'));
        interval = setInterval(snakeMoves, intervalTime);
        
    }

    // Outcomes depending on the direction
    function snakeMoves(){

        // Now after making snake move the next step is to give actions if snake hits any walls
        if(
            (snakePos[0] + width >= (width * width) && direction === width) || // bottom
            (snakePos[0] % width === width -1 && direction === 1) || // right
            (snakePos[0] % width === 0 && direction === -1) || // left
            (snakePos[0] - width < 0 && direction === -width) || // top
            cubes[snakePos[0] + direction].classList.contains('snake')
        ){
            alert(`Game over.. Your final score is ${score}`);
            return clearInterval(interval);
        }

        // adding the snake to front and remove from the end
        const snakeTail = snakePos.pop();
        cubes[snakeTail].classList.remove('snake');
        snakePos.unshift(snakePos[0] + direction);

        // after snake hitting walls are determind give logic to snake eating apple
        if(cubes[snakePos[0]].classList.contains('apple')){
            cubes[snakePos[0]].classList.remove('apple');
            // add length to snake array for eating apple
            cubes[snakeTail].classList.add('snake');
            snakePos.push(snakeTail);

            //create random apple then here
            randomApplePos();
            score++;

            // increases speed of snake depending on the score
            if(score === 5){
                speed = 0.85;
                randomApplePos(); // increase number of apples on board
            } else if(score === 10){
                speed = 0.8;
            } else if(score === 20){
                speed = 0.75;
            }
            scoreDisplay.textContent = score;
            clearInterval(interval);
            intervalTime = intervalTime * speed;
            interval = setInterval(snakeMoves, intervalTime);
        }

        cubes[snakePos[0]].classList.add('snake');
    }

    // create the apple position at random position
    function randomApplePos(){
        do{
            applePos = Math.floor(Math.random() * cubes.length);
        } while(cubes[applePos].classList.contains('snake'));

        cubes[applePos].classList.add('apple');
    }



    // we want to test if keys pressed work
    // then assign direction of navigation to keys
    function isKeyPressed(yes){
        if(yes.keyCode === 38){
            // alert('up');
            direction = -width;
        }
        else if(yes.keyCode === 37){
            // alert('left');
            direction = -1;
        }
        else if(yes.keyCode === 39){
            // alert('right');
            direction = +1;
        }
        else if(yes.keyCode === 40){
            // alert('down');
            direction = +width;
        }
    }

    document.addEventListener('keyup', isKeyPressed);
    isRunning.addEventListener('click', startGame);

}
);