// Напишите функцию, которая убирает повторяющиеся значения.Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]
// let b = [1, 2, 3]
// console.log(b.sort((a, b) => a > b ? -1 : 1))


//Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null. * Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
// let arr = [0, 1, false, 2, undefined, '', 3, null]
// let a = arr.filter(item => typeof item === 'number' && !isNaN(item));
// console.log(a)


//Описание задачи: Напишите функцию, которая убирает повторяющиеся значения.
// Ожидаемый результат:
// [1, 2, 3, 1, 2] => [1, 2, 3]
// let a = [1, 2, 3, 1, 2];
// console.log([...new Set(a)]);


//Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6
//Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// let a = [1 ,2, 3]
// let b = [4, 5, 6]
// console.log([...a, ...b])
// console.log([...b, ...a])




// Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
// let arr = {
//         js: 'test',
//         jq: 'hello',
//         css: 'hello'
//     }
//
// console.log(Object.keys(arr) )


//Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. Элементы массива будут разделены запятой.
// let a = ['Капуста', 'Репа', 'Редиска', 'Морковка']
// console.log(a.join(', '))


// Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должен быть массив [кАжДыЙ оХоТнИк]
// function toggleCase(inputString) {
//
//     let result = '';
//
//     for (let i = 0; i < inputString.length; i++) {
//         const char = inputString[i];
//
//
//         if (char === char.toUpperCase()) {
//             result += char.toLowerCase();
//         } else {
//             result += char.toUpperCase();
//         }
//     }
//
//     return result;
// }
//
// const inputString = "КаЖдЫй ОхОтНиК";
// const toggledString = toggleCase(inputString);
// console.log(toggledString);


//9
// const cars = [
//     {
//         make: "Ford",
//         model: "Mustang",
//         year: 1969,
//         color: "red",
//         price: 25000
//     },
//     {
//         make: "Ford",
//         model: "F-150",
//         year: 2017,
//         color: "blue",
//         price: 30000
//     },
//     {
//         make: "Tesla",
//         model: "Model S",
//         year: 2018,
//         color: "black",
//         price: 120000
//     },
//     {
//         make: "Chevrolet",
//         model: "Camaro",
//         year: 1970,
//         color: "orange",
//         price: 60000
//     },
//     {
//         make: "Dodge",
//         model: "Challenger",
//         year: 2019,
//         color: "red",
//         price: 35000
//     },
//     {
//         make: "Chevrolet",
//         model: "Corvette",
//         year: 2019,
//         color: "blue",
//         price: 90000
//     },
//     {
//         make: "Tesla",
//         model: "Model 3",
//         year: 2019,
//         color: "white",
//         price: 40000
//     },
//     {
//         make: "Mercedes",
//         model: "C-Class",
//         year: 2019,
//         color: "black",
//         price: 60000
//     }
// ]
// console.log(cars.filter(el => el.price >= 40000 && el.price <= 60000))