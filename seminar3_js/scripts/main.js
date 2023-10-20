// Задача 1: Получить от пользователя два числа и вывести в диалоговое окно сумму значений, которые ввел пользователь, вывод должен выглядеть так (пример): 
// Результат сложения чисел 5 и 2 равен 7.
 
// function getSum(number1, number2) {
//     return number1 + number2;
// }
// const num1 = Number.parseFloat(prompt("Введите первое число: "));
// const num2 = Number.parseFloat(prompt("Введите второе число: "));
// alert(`Результат сложения чисел ${num1} и ${num2} равен ${getSum(num1, num2).toFixed(1)}`);
// const num3 = 0.424;
// const roundedNum3 = Math.round(num3 * 100) / 100;
 
// Задача 2: вывести на экран в диалоговом окне текст с сообщением “Вам хорошо живется?”
// и кнопками «ОК», «Отмена», для чего необходимо использовать confirm.
// - При нажатии на кнопку “ОК” вывести в диалоговом окне текст с сообщением “Тогда мы идем к вам!”.
// - При нажатии на кнопку “Отмена” вывести в диалоговом окне текст с сообщением “Ну, вы держитесь там!”.
 
// if (confirm("Вам хорошо живется?")) {
//     alert("Тогда мы идем к вам!");
// } else {
//     alert("Ну, вы держитесь там!");
// }
 
// confirm("Вам хорошо живется?") ? alert("Тогда мы идем к вам!") : alert("Ну, вы держитесь там!");
 
// Задача 3: перепишите код, используя конструкцию switch-case, 
// запрашивая продукт через диалоговое окно.
 
// <script>
// let product = "бананы";
 
// if (product == "мандарины") {
//   alert('Мандарины стоят 100 руб/кг.');
// } else if (product == "бананы") {
//   alert('Бананы и груши стоят 70 руб/кг.');
// } else if (product == "груши") {
//   alert('Бананы и груши стоят 70 руб/кг.');
// } else {
//   alert('Нет такого продукта.');
// }
// </script>
 
// const product = prompt("Какой продукт?");
// switch (product.toLowerCase()) {
//     case "мандарины":
//         alert('Мандарины стоят 100 руб/кг.');
//         break;
//     case "бананы":
//     case "груши":
//         alert('Бананы и груши стоят 70 руб/кг.');
//         break;
//     default:
//         alert('Нет такого продукта.');
// }
 
// Функция getMaxEvenElement принимает массив с целыми числами, необходимо 
// реализовать функцию так, чтобы она возвращала значение большего элемента массива, 
// который записан в четном индексе включая 0.
 
// function getMaxEvenElement(arr) {
//     let max = arr[0];
//     for (let i = 2; i < arr.length; i += 2) {
//         if (max < arr[i]) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
 
// console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0])); // 5
// console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50])); // 31
 
/*
Один покупатель старинных уникальных часов хочет приобрести для музея 
двое часов. В магазине у хозяйки есть n разных часов с соответствующими 
ценами [p1, ..., pn]. Покупатель хочет полностью использовать свой 
бюджет. Необходимо выяснить получится ли это.
*/
function f(clockArr, money) {
    let el = 0;
    for (let i = 0; i < clockArr.length - 1; i++) {
        for (let j = i + 1; j < clockArr.length; j++) {
            console.log(clockArr[i] + clockArr[j]);
            if (money == Math.round((clockArr[i] + clockArr[j]) * 100) / 100) {
                return true;
            }
        }
    }
    return false;
}
 
console.log(f([8.74, 3.12, 9.50, 2.35], 2.35)); // false
console.log(f([1.1, 4.2, 7.5, 0.4], 8.4)); // false
console.log(f([54.10, 20.00, 18.51, 97.75, 35.20, 76.42], 89.3)); // true