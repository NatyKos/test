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
function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
    ];
    
    for (const product of products) {
        if (product.name === productName) {
          return product.price * product.quantity;
        } 
    } return `Product ${productName} not found!`
}
console.log(calculateTotalPrice("Radar"));