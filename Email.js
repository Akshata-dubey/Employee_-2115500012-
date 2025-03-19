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