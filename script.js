
function padString(string, num, glyph, side) {
  let newString = string;
  if (typeof string !== "string" || string.trim() === "") {
    return "Error - Empty or not string";
  } else if (isNaN(num) || num <= 0) {
    return "Error - not a number";
  } else if (glyph.length === 0 || glyph.length > 1) {
    return "Error - not 1 symbol";
  } else if (typeof side !== "boolean") {
    return "Error - not boolean";
  }

  if (string.length > num) {
    newString = newString.substr(0, num);
  } else if (string.length < num) {
    if (side) {
      newString = string.padEnd(num, glyph);
    } else {
      newString = string.padStart(num, glyph);
    }
  }
  return newString;
}

let newString = padString("hello", 8, "*", false);
console.log(newString);
