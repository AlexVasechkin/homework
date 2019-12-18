

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

// while (i < 2) {
//   expenseCaption = prompt("Введите обязательную статью расходов в этом месяце", "");
//   expensePrice   = prompt("Во сколько обойдется?", "");
//   appData.expenses[expenseCaption] = expensePrice;
//   i++;
// }

// for (let j = 0; j < 2; j++) {
//   expenseCaption = prompt("Введите обязательную статью расходов в этом месяце", "");
//   expensePrice   = prompt("Во сколько обойдется?", "");
//   appData.expenses[expenseCaption] = expensePrice;
// }

let k = 0;
do {
  expenseCaption = prompt("Введите обязательную статью расходов в этом месяце", "");
  expensePrice   = prompt("Во сколько обойдется?", "");
  if (   typeof(expenseCaption) === 'string'
      && length(expenseCaption) > 3
      && typeof(expensePrice) === 'string'
      && length(expensePrice) > 0) {
      appData.expenses[expenseCaption] = expensePrice;
      k++;
    } else {
      alert('Неверно введена статья расходов');
    }
}
while (k < 2);


budgetPerDay = appData.budget / 30;
alert( +budgetPerDay.toFixed(2));



