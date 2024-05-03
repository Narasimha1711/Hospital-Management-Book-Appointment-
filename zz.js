const bcrypt = require('bcrypt')
const saltRounds = 10;

myPlaintextPassword = "narasimha";

let a;

// bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
//     // Store hash in your password DB.

//     // console.log(myPlaintextPassword)
//     console.log(hash)

//     a = hash;

    
// });


// console.log(hash)
const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);

bcrypt.compareSync(myPlaintextPassword, hash);
console.log(bcrypt.compareSync(myPlaintextPassword, hash))

// bcrypt.compare(myPlaintextPassword, a, function(err, result) {
//     // result == true
//     console.log("true")
//     console.log(a)
// });