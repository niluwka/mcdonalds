do {
    var burger = prompt(`Выберите бургер:
Большой - 0
Маленький - 1`);

    if (burger === '-0') {
        burger = 0;
    }
} while (burger == '' || isNaN(burger) ||
1 < burger || burger < 0 || burger == null);

let burgers = [['Большой-бургер', '340', '10000'], ['Маленький-бургер', '250', '5000']];
let fillings = [['Салат', '5', '1500'], ['Сыр', '25', '2000'], ['Ветчина', '50', '5000']];
let addittionallys = [['Соусом', '0', '500'], ['Майонезом', '10', '500']];

alert('Выберите начинку!');
for (let i = 0; i < fillings.length; i++) {
    var filling = confirm(`${fillings[i][0]}?`);
    if (filling) {
        burgers[burger].push(...fillings[i]);
    }
}
alert('Выберите дополнительно!?');

for (let i = 0; i < addittionallys.length; i++) {

    var addittionally = confirm(`${addittionallys[i][0]}?`);

    if (addittionally) {
        burgers[burger].push(...addittionallys[i]);
    }
}
var totalPrise = 0;
var totalKall = 0;
var totalProducts = '';

for (let i = 0; i < burgers[burger].length; i++) {
    if (isNaN(burgers[burger][i])) {
        totalProducts += burgers[burger][i] + '\n';
        totalPrise += +burgers[burger][i + 2];
        totalKall += +burgers[burger][i + 1];
    }
}
alert(`Вы купили: 
${totalProducts}Общая цена: ${totalPrise}
Общая калл: ${totalKall}`);
