

let money = prompt("Ваш бюджет на месяц?", "");
console.log(money);

let time = prompt("Введите дату в формате YYYY-MM-DD", "");
console.log(time);

let appData = {
                budget: money,
                timeData: time,
                expenses: {},
                optionalExpenses: {},
                income: [],
                savings: false
              },
    expenseCaption,
    expensePrice,
    i = 0;

while (i < 2) {
  expenseCaption = prompt("Введите обязательную статью расходов в этом месяце", "");
  expensePrice   = prompt("Во сколько обойдется?", "");
  appData.expenses.expenseCaption = expensePrice;
  i++;
}
budgetPerDay = appData.budget / 30;
alert( +budgetPerDay.toFixed(2));



