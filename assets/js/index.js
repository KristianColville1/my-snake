document.addEventListener('DOMContentLoaded', () => {
    const cubes = document.querySelectorAll('.grid div');
    const score = document.querySelector('span');
    const isRunning = document.querySelector('.start-game');
    // test that the document is loaded
    // and that snake will move if keys pressed

    const snake = document.querySelectorAll('.snake');

    // we want to test if keys pressed work
    function isKeyPressed(yes){
        if(yes.keyCode === 38){
            alert('up');
        }
        else if(yes.keyCode === 37){
            alert('left');
        }
        else if(yes.keyCode === 39){
            alert('right');
        }
        else if(yes.keyCode === 40){
            alert('down');
        }
    }

    // Now we want to test that the snake moves if keys pressed
    const width = 10;
    let position = 0;
    let applePos = 0;
    let snakePos = [2, 1, 0];
    let direction = 1;
    let scoreDisplay = 0;
    let speed = 0.5;
    let intervalTime = 1000;
    let interval = 0;

    // start game function
    function startGame(){

        // remove the snake class from the div when game starts..
        snakePos.forEach(index => cubes[index].classList.remove('snake'));

        // reset these values from above
        position = 0;
        applePos = 0;
        snakePos = [2, 1, 0];
        direction = 1;
        scoreDisplay = 0;
        speed = 0.5;
        intervalTime = 1000;
        interval = 0; 

        // add the snake back to the game after values are reset
        snakePos.forEach(index => cubes[index].classList.add('snake'));
    }


    document.addEventListener('keyup', isKeyPressed);
    isRunning.addEventListener('click', startGame);

}
);