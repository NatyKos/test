// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];
// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key])
// };
// console.log(keys, values);
// ===========================
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// let values = [];
// const keys = Object.keys(apartment);
//     for (const key of keys) {
//     values.push(apartment[key]);
// };
// console.log(values);
// console.log(keys);
// ===========================
// function countProps(object) {
//   let propCount = Object.keys(object);
//   return propCount.length;
// }
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
// ===========================
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);
// console.log(keys, values);
// ======================
// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     let pay = Object.values(salaries);
//     for (const i of pay) {
//         totalSalary += i;
        
//     }
//     return totalSalary;
// }
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));
// =============================
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// for (const h of colors) {
//     hexColors.push(h.hex);
// };
// const rgbColors = [];
// for (const r of colors) {
//     rgbColors.push(r.rgb);
// }
// console.log(hexColors, rgbColors);
// =============================
// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//     ];
// for (const product of products) {
//         if (product.name === productName ) {
//         return product.price;
//     }
//     } return null;
// }

// console.log(getProductPrice("Scanner"));
// ===============================
// function getAllPropValues(propName) {
//     const products = [
//         { name: "Radar", price: 1300, quantity: 4 },
//         { name: "Scanner", price: 2700, quantity: 3 },
//         { name: "Droid", price: 400, quantity: 7 },
//         { name: "Grip", price: 1200, quantity: 9 },
//     ];
//     let mas = [];
//     for (const product of products) {
//         let k = Object.keys(product);
//         if (k.includes(propName)) {
//           mas.push(product[propName]);
//         }
//         }return mas;
//     };

//     console.log(getAllPropValues("name"));
// ================================
// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//     ];
    
//     for (const product of products) {
//         if (product.name === productName) {
//           return product.price * product.quantity;
//         }
//     } return `Product ${productName} not found!`
// }
// console.log(calculateTotalPrice("Radar"));
// ================================
// До нас звернулася власниця крамниці зілля «У старої жаби» і замовила програму для ведення інвентарю. Програма має додавати, видаляти, шукати та оновлювати зілля.

// Оголоси об'єкт atTheOldToad з наступними властивостями:

// potions — масив, де будуть зберігатися зілля. Нехай зараз він буде порожнім
// getPotions() — метод, який повертає рядок "List of all available potions"
// addPotion(potionName) — метод, який повертає рядок "Adding <potionName>", де potionName — це значення параметра potionName
// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості potions - це масив []
// Значення властивості getPotions - це метод об'єкта
// Виклик методу atTheOldToad.getPotions() повертає рядок "List of all available potions"
// Значення властивості addPotion - це метод об'єкта
// Виклик методу atTheOldToad.addPotion("Invisibility") повертає рядок "Adding Invisibility"
// Виклик методу atTheOldToad.addPotion("Power potion") повертає рядок "Adding Power potion"
// +++++++++++++++++++++++++++++++++++++
// const atTheOldToad = {
//   potions: [],
//   getPotions() {
//     return 'List of all available potions';
//   },
//   addPotion(potionName) {
//     return `Adding ${potionName}`;
//   },
// }
// console.log(atTheOldToad.addPotion("Power potion"));
// ====================================================
// Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною. Тому зараз у властивості potions буде зберігатися масив об'єктів з властивостями name та price.
// Об'єкт atTheOldToad має наступні властивості:
// potions — масив рядків, з назвами зілль
// getPotions() — метод, який повертає значення властивості potions
// addPotion() — метод, який приймає параметр об'єкт нового зілля newPotion і додає його в кінець масиву у властивості potions.
// Додай метод getTotalPrice(), який має повертати загальну вартість усіх зілль з властивості potions.
// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.getPotions - це метод об'єкта
// Виклик методу atTheOldToad.getPotions() повертає поточне значення властивості potions
// Значення властивості atTheOldToad.addPotion - це метод об'єкта.
// Після виклику методу atTheOldToad.addPotion({ name: "Invisibility", price: 620 }), в масиві potions останнім елементом буде цей об'єкт
// Після виклику методу atTheOldToad.addPotion({ name: "Power potion", price: 270 }), в масиві potions останнім елементом буде цей об'єкт
// Значення властивості atTheOldToad.getTotalPrice - це метод об'єкта
// Виклик методу atTheOldToad.getTotalPrice() повертає загальну вартість усіх зілль з властивості potions
// ++++++++++++++++++++++++++++++++++++++++++++++++
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let total = 0;
//     for (const potion of this.potions) {
//         total += potion.price;
//       }
//       return total;
//   },
// };
// console.log(atTheOldToad.getTotalPrice());
// ============================================
// Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював назву зілля з oldName на newName в масиві зілля у властивості potions.
// ++++++++++++++++++++++++++++++++++++++++
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//     updatePotionName(oldName, newName) {
//         for (const potion of this.potions) {
//           if (potion.name === oldName) {
//               potion.name = newName;
//           }
        
//         }
//         return this.potions;
//   },
// };
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"));
// ==============================================
// Використовуючи синтаксис залишкових параметрів, доповни код функції add() так, щоб вона приймала будь-яку кількість аргументів у параметр args і повертала їхню суму.
// ++++++++++++++++
// function add(...args) {
//     let total = 0;
//     for (let i = 0; i <arguments.length; i++) {
        
//         total += arguments[i];
    
//     }
//     return total;
// }
// console.log(add(12, 4, 11, 48));
// ===========================
// function addOverNum(value, ...args) {
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i]>value) {
//             total += arguments[i];
//         }
        
//     }
//     return total;
// }
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// ==========================
// Функція getExtremeScores(scores) приймає масив оцінок (чисел) у параметрі scores.

// Доповни код функції так, щоб вона повертала об'єкт із двома властивостями:

// Властивість best має містити найбільше число з масиву scores
// Властивість worst має містити найменше число з масиву scores.
// Використовуй оператор(...spread) і методи Math.max() і Math.min().
// +++++++++++++++++++
// function getExtremeScores(scores) {
//     let b = Math.max(...scores);
//     let w = Math.min(...scores);
//     return { best: b, worst: w };
// }
// console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));
// ==========================
// У змінній allScores зберігався масив всіх результатів від першої до третьої групи включно.
// У змінній bestScore був найвищий загальний бал.
// У змінній worstScore був найнижчий загальний бал.
// +++++++++++++++++++++++++++++
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// console.log(allScores, bestScore, worstScore);
// ========================
