
let msg = "   Hi Satyam, How are you?           "

console.log(msg.trim().toUpperCase());
HI SATYAM, HOW ARE YOU?

let pass = "  345@satyam!  "

let password = pass.trim();

password.slice(4,10)
'satyam'

password.indexOf("satyam")
4

password.replace("345","123");
'123@satyam!'

password = password.replace("345","123");
'123@satyam!'
﻿
