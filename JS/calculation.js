document.getElementById('btn-calculate').addEventListener('click', function () {
    const playerBudget = getInputFieldValueById('per-player-budget');
    const playerBudgetTotal = 5 * playerBudget;
    const playerExpense = document.getElementById('player-expense');
    playerExpense.innerText = playerBudgetTotal;
})

document.getElementById('btn-calculate-total').addEventListener('click', function () {
    const playerExpense = getInnerTextById('player-expense');
    const managerExpense = getInputFieldValueById('manager-expense');
    const coachExpense = getInputFieldValueById('coach-expense');
    const totalExpenseValue = playerExpense + managerExpense + coachExpense;
    const toatlExpense = document.getElementById('total-expense');
    toatlExpense.innerText = totalExpenseValue;
})