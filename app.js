let history = {
    oneA: null,
    oneB: null,
    onceC: null,
    twoA: null,
    twoB: null,
    twoC: null,
    threeA: null,
    threeB: null,
    threeC: null
}

function play(spaceId) {
    let val = prompt('X or O?');
    if(val !== 'X' && val !== 'O') {
        alert('invalid entry, please try again')
    } else {
        let space = document.getElementById(spaceId);
        space.innerHTML = val;
        space.disabled = true;
        saveDetails(spaceId, val)
    }
}

function saveDetails(spaceId, val) {
    history[spaceId] = val;
    if((history.oneA === 'X' && history.oneB === 'X' && history.oneC === 'X') || (history.oneA === 'O' && history.oneB === 'O' && history.oneC === 'O')) {
        endGame()
    }
}

function endGame() {
    setTimeout(function() {
        alert('You win')
    }, 1500)
}