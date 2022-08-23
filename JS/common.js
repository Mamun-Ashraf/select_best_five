function addPlayerName(btnPlayer, PlayerNameId) {
    document.getElementById(btnPlayer).addEventListener('click', function () {
        const playerNameElement = document.getElementById(PlayerNameId);
        const playerName = playerNameElement.innerText;

        const list = document.getElementById('players-list');
        const li = document.createElement('li');
        li.innerText = playerName;
        if (document.querySelectorAll('#players-list li').length < 5) {
            list.appendChild(li);
        }

        else {
            list.innerHTML = 'You cannot select more than five players'
        }
    })
}

function getInputFieldValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementString = element.value;
    const elementValue = parseInt(elementString);
    if (isNaN(elementString)) {
        console.log('Please provide a number type value');
    }
    else {
        return elementValue;
    }
}

function getInnerTextById(elementId) {
    const element = document.getElementById(elementId);
    const elementString = element.innerText;
    const elementValue = parseInt(elementString);
    return elementValue;
}