document.addEventListener('DOMContentLoaded', () => {

    // test that the document is loaded
    // and that snake will move if keys pressed

    const snake = document.querySelectorAll('.snake');

    // we want to test that the snake is moving if keys pressed
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
    document.addEventListener('keyup', isKeyPressed);


}
);