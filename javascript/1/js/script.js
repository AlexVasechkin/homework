let  money
    ,time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(   isNaN(money)
          || money == ""
          || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }

}

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

function chooseExpenses() {
    for (let j = 0; j < 2; j++) {
        expenseCaption = prompt("Введите обязательную статью расходов в этом месяце", "");
        expensePrice   = prompt("Во сколько обойдется?", "");
        appData.expenses[expenseCaption] = expensePrice;
        
        if (   typeof(a) === 'string'
            && typeof(b) != null
            && a != ''
            && b != ''
            && a.length > 50
           )
        {
            console.log('done');
            appData.expenses[a] = b;
        } else {
            i = i - 1;
        }
    }
}
chooseExpenses();

appData.moneyPerDay() = (appData.budget / 30).toFixed();

alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay >= 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
}
// let k = 0;
// do {
//   expenseCaption = prompt("Введите обязательную статью расходов в этом месяце", "");
//   expensePrice   = prompt("Во сколько обойдется?", "");
//   if (   typeof(expenseCaption) === 'string'
//       && length(expenseCaption) > 3
//       && typeof(expensePrice) === 'string'
//       && length(expensePrice) > 0) {
//       appData.expenses[expenseCaption] = expensePrice;
//       k++;
//     } else {
//       alert('Неверно введена статья расходов');
//     }
// }
// while (k < 2);


// budgetPerDay = appData.budget / 30;
// alert( +budgetPerDay.toFixed(2));



