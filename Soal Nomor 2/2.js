function isPasswordValid(password) { 
    var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (password.match(decimal)) {
         console.log(true);
     } else {
         console.log(false);
     }
 }
 
 isPasswordValid('123Qwer_');
 isPasswordValid('123qwer_');
 isPasswordValid('SUper&&4');
 isPasswordValid('ssdga_A7');

