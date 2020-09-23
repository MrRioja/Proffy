const bcrypt = require("bcrypt");
const saltRounds = 20;
const testPassword = "s3nh4t3st3";
const someOtherPlaintextPassword = "not_bacon";

const thash = "";

bcrypt.genSalt(saltRounds, function (err, salt) {
  bcrypt.hash(testPassword, salt, function (err, hash) {
    console.log(hash);
  });
});

/*
bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
  // Store hash in your password DB.
});*/
