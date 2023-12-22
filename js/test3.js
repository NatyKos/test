function getOrderQuantity(order) {
    return order.length;
}
console.log(getOrderQuantity([1, 2, 3, 4, 5]));
// ============================
function getLastElementMeta(array) {
    const lastArrayInd = array.length - 1;
    return [lastArrayInd, array[lastArrayInd]];
       
}
console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));
// ===========================
function getExtremeElements(array) {
    const lastArrayIn = array.length - 1;
    return [array[0], array[lastArrayIn]];
}
console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// =========================
function getLength(array) {
    const a = array.join("");
    return a.length;
}
console.log(getLength(["top", "picks", "for", "you"]));
// =============================
function calculateEngravingPrice(message, pricePerWord) {
    const a = message.split(" ");
    const b = a.length;
    const pricePerOrder = pricePerWord * b;
    return pricePerOrder
}
console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// =============================
const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

const firstTwoEls = fruits.slice(0,2);
const nonExtremeEls =fruits.slice(1,4) ;
const lastThreeEls = fruits.slice(-3);
console.log(firstTwoEls);
console.log(nonExtremeEls);
console.log(lastThreeEls);
// ================================
const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Peach", "Houston"];
const allClients = oldClients.concat(newClients);
console.log(allClients);
// ===============================
function getSlice(array, value) {
    const a = array.indexOf(value);
   { if (a == -1)
        return []; else return (
        array.slice(0, a+1))
    };
}
console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax"));
// =========================
function createArrayOfNumbers(min, max) {
    const mas = [];
    for (let a = min; a <= max; a++) {
     
        mas.push(a);
        
    }
    return mas;
}
console.log(createArrayOfNumbers(14, 17));
// ============================
function calculateTotalPrice(order) {
    let total = 0;
    for (let i = 0; i < order.length; i++) {
        total += order[i];   
    }
    return total;
}
console.log(calculateTotalPrice([164, 48, 291]));
// ===============================
function getEvenNumbers(start, end) {
    const evenNumbers = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
        }
    }
        return evenNumbers;
    }
console.log(getEvenNumbers(2, 9));
// ===================================
function checkStorage(storage, item) {
    if (storage.includes(item.toLowerCase())) {
        return (`${item.toLowerCase()} is available to order!` )
        
    } else {
        return(`Sorry! We are out of stock!`)
    }
}
console.log(checkStorage(["apple", "plum", "pear"], "pEAr"));
// =====================================
function getCommonElements(array1, array2) {
    const general = [];
for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
        general.push(array1[i])
        
    } 
    
    } return general;
}
console.log(getCommonElements([1, 2, 3, 17, 19], [2, 1, 17, 19]));
// ==============================
function calculateTotalPrice(order) {
    let total = 0;
    for (const i of order) {
        total += i;
    }
    return total;
}
console.log(calculateTotalPrice([1,1,1,1]));
// ============================
function createReversedArray() {
    const a = Array.from(arguments);
    return a.toReversed()
}
console.log(createReversedArray(1,2,3,4,5));
// ===========================
function calculateTax(amount, taxRate = 0.2) {
    return (amount * taxRate);
}
console.log(calculateTax(100, 0.3));
