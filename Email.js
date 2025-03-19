//EMAIL-1
// Function to validate email
function validateEmail(email) {
    let emailRegex = /^abc(\.[a-zA-Z0-9]+)?@bridgelabz\.co(\.in)?$/;
    return emailRegex.test(email);
}

// Test cases
console.log(validateEmail("abc@bridgelabz.co"));         
console.log(validateEmail("abc.xyz@bridgelabz.co"));     
console.log(validateEmail("abc@bridgelabz.co.in"));      
console.log(validateEmail("abc.xyz@bridgelabz.co.in"));  
console.log(validateEmail("abc@bridgelabz.com"));        
console.log(validateEmail("abcd@bridgelabz.co.in"));    
console.log(validateEmail("abc.@bridgelabz.co.in"));    
console.log(validateEmail("abc@bridgelabz.in"));         
console.log(validateEmail("abc.xyz@bridgelabzcom"));     
console.log(validateEmail("abc.xyz@xyz.co.in"));         
console.log(validateEmail("abc123@bridgelabz.co.in"));   




//EMAIL-2
// Function to validate email addresses as per the given rules
function validateEmail(email) {
    let emailRegex = /^abc(?:\.[a-zA-Z0-9]+)?@bridgelabz\.co(?:\.[a-zA-Z]{2,})?$/;
    return emailRegex.test(email);
}

// Test cases
console.log(validateEmail("abc.xyz@bridgelabz.co.in"));  
console.log(validateEmail("abc@bridgelabz.co"));         
console.log(validateEmail("abc@bridgelabz.co.in"));      
console.log(validateEmail("abcd@bridgelabz.co.in"));     
console.log(validateEmail("abc@xyz.co.in"));           
console.log(validateEmail("abc.xyz@bridge.co.in"));     
console.log(validateEmail("abcxyz@bridgelabz.co"));     
console.log(validateEmail("abc-xyz@bridgelabz.co.in")); 
console.log(validateEmail("abc@bridgelabzcom"));        
