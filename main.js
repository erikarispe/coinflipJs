const result = document.querySelector('.result');

const tailscore = document.querySelector('.tailscore');

const headscore = document.querySelector('.headscore')

function coinFlip() {
    return (Math.random() < 0.5) ? 'Heads' : 'Tails'; 
}

const btn = document.querySelector('.button');
btn.addEventListener('click', e => {
    const flipResult = coinFlip();
    result.textContent = flipResult;
    if (flipResult === 'Heads') {
        headscore.textContent = parseInt(headscore.textContent) + 1;
    } else {
        tailscore.textContent = parseInt(tailscore.textContent) + 1;
    }
    console.log(flipResult)
});
