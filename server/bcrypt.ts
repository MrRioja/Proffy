const bcrypt = require("bcrypt");
const saltRounds = 16;
const password = "Test Password";

console.time("generateSalt");
const salt = bcrypt.genSaltSync(saltRounds);
console.log(salt);
console.timeEnd("generateSalt");

console.time("generateEncrypted");
const encrypted = bcrypt.hashSync(password, salt);
console.log(encrypted);
console.timeEnd("generateEncrypted");

console.time("compare");
bcrypt.compareSync("Test Password", encrypted);
console.timeEnd("compare");
