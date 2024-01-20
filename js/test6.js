// class Car {
//     #brand;
//     constructor({ brand, model, price }) {
//         this.#brand = brand;
//         this.model = model;
//         this.price = price;
//     }
  
//         getBrand(){
//             return this.#brand;
//         }
//         changeBrand(newBrand){
//             this.#brand = newBrand;
//         }
//         getPrice() {
//             return this.price;
//         }

//         changePrice(newPrice) {
//             this.price = newPrice;
//         }
// }
// =============================
// class Car {
// #price;
// static maxPrice = 50000;

//   constructor({ price }) {
//       this.#price = price;
      
//  }

//   get price() {
//     return this.#price;
//   }

//     set price(newPrice) {
//         if (newPrice <= Car.maxPrice) {
//           this.#price = newPrice; 
//       } 
    
//   }
// };

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000
// ============================
class Car {
  static #maxPrice = 50000;
  static checkPrice(price){
    if (price > this.#maxPrice ) { return 'Error! Price exceeds the maximum'
        
    } else {return "Success! Price is within acceptable limits"
        
    }
  }

  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
// ======================
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//     };
//     constructor({ email, access }) {
//         super(email);
//        this.access = access;
//     }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// console.log(Admin.role.BASIC);
// =====================

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  static role = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, access }) {
    super(email);
    this.access = access;
    }
    blacklistedEmails = [];
    blacklist(email) {
        this.blacklistedEmails.push(email)
    };
    isBlacklisted(email) {
        if (this.blacklistedEmails.includes(email)) {
        return true    
        } else {
            return false
        }  
    }

}

const mango = new Admin({
  email: "mango@mail.com",
  access: Admin.role.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.access); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true


