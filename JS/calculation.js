document.getElementById('btn-calculate').addEventListener('click', function () {
    const playerBudget = getInputFieldValueById('per-player-budget');
    if (!playerBudget) {
        alert('Please provide a valid number');
    }
    else if (playerBudget <= 0) {
        alert('Please set more than amount of zero');
    }
    else {
        const playersNumber = document.querySelectorAll('#players-list li').length;
        const playerBudgetTotal = playersNumber * playerBudget;
        const playerExpense = document.getElementById('player-expense');
        playerExpense.innerText = playerBudgetTotal;
    }
})

document.getElementById('btn-calculate-total').addEventListener('click', function () {
    const playerExpense = getInnerTextById('player-expense');
    const managerExpense = getInputFieldValueById('manager-expense');
    const coachExpense = getInputFieldValueById('coach-expense');
    if (!playerExpense || !managerExpense || !coachExpense) {
        alert('Please provide a valid number');
    }
    else if (playerExpense <= 0 || managerExpense <= 0 || coachExpense <= 0) {
        alert('Please set more than amount of zero');
    }
    else {
        const totalExpenseValue = playerExpense + managerExpense + coachExpense;
        const toatlExpense = document.getElementById('total-expense');
        toatlExpense.innerText = totalExpenseValue;
    }
})