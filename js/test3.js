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
