
function isNumberInRange (start, end, number)
{ if (number >= start && number <= end) return `true`;  else  return `false`;   } ;

console.log(isNumberInRange(1, 7, 15));

function checkAccess(subType) { if (subType == "pro" || subType == "vip") return `true`; else return `false`; };
console.log(checkAccess("gljlj"));

// ===========================

function toggleModalVisibility(isVisible) {
  if (!isVisible) {
    return true;
  
  } else {
    return false;
  
  }
}
console.log(toggleModalVisibility(true))


// ===========================
function getSubstring(string, length) {
  return string.slice(0, length);
}
console.log(getSubstring("jhjhjh", 3));

// ==============================
function normalizeInput(input, to) {
  if (to === "upper") {return input.toUpperCase()
    
  } else { return input.toLowerCase()
    
  };
}
console.log(normalizeInput("ljLLJLJLJljl", "lov"));

// ===========================

function checkForName(fullName, firstName)
{
  let fullnameall = fullName.toLowerCase();
  let firstNameall = firstName.toLowerCase();
  let check = fullnameall.includes(firstNameall)
  if (check) {return `true`
    
  } else { return `false`
  };
}
console.log(checkForName("Nata Kosenko", "NATA"));
// ==========================

function checkFileExtension(fileName, ext)
{
  if (fileName.endsWith(ext)) {
    return `File extension matches`;
  
} else {return `File extension does not match`
  
}
}
console.log(checkFileExtension("fljjl.png", "png"));
// =============================

function getFileName(file)
{
  let check = file.indexOf(`.`);
  if (check === -1) {
    return file;
  
  } else {
    return file.slice(0, check);
  
  };
}
console.log(getFileName("nkjkj"));
// ==================
function createFileName(name, ext)
{
  let n = name.trim();
  let e = ext.trim();
  let f = n + "." + e;
  return f.trim();
}
console.log(createFileName("kjljl", "ljlj"));

// ===============================
function calculateTotal(number) {
  let sum = 0;
  let a = 1;
    while (a <= number) {
    sum += a;
    a += 1;
  }
  return sum;
  }
console.log(calculateTotal(3));

// ================================
function calculateTotal(number) {
  let sum = 0;
  for (let a = 1; a <= number; a += 1) {
  sum += a;
    
}
  return sum;
}
console.log(calculateTotal(9));
// =====================
function calculateEvenTotal(number) {
  let sum = 0;
  for (let a = 1; a <= number; a++) {
    if (a % 2 === 0) {
     sum += a
    };
   
  } return sum;
}
console.log(calculateEvenTotal(6));
// ===========================
const start = 6;
const end = 17;
let number;
for (let a = start; a <= end; a++) {
  if (a % 5 === 0) {
    number = a;
  
  break;
  }
} console.log(number);
// ===========================
function findNumber(start, end, divisor) {
  for (let a = start; a <= end; a++) {
    if (a % divisor === 0) {
      return a
    }
  }
}
console.log(findNumber(16, 35, 7));