
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
