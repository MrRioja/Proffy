const bcrypt = require("bcrypt");
const saltRounds = 15;
const password = "Test Password";

const salt = bcrypt.genSaltSync(saltRounds);
const encrypted = bcrypt.hashSync(password, salt);

bcrypt.compareSync("Test Password", encrypted);
