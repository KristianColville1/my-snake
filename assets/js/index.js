document.addEventListener('DOMContentLoaded', () => {
    const cubes = document.querySelectorAll('.grid div');
    const score = document.querySelector('span');
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
    let score = 0;
    let speed = 0.5;
    let intervalTime = 1000;
    let interval = 0;



    document.addEventListener('keyup', isKeyPressed);


}
);