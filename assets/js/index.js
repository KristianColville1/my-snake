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

        // adding the snake to front and remove from the end
        const snakeTail = snakePos.pop();
        cubes[snakeTail].classList.remove('snake');
        snakePos.unshift(snakePos[0] + direction);



        cubes[snakePos[0]].classList.add('snake');
    }





    // we want to test if keys pressed work
    // then assign direction of navigation to keys
    function isKeyPressed(yes){
        cubes[lastIndex].classList.remove('snake');

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