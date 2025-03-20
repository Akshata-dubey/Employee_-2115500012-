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


//ENAIL-3
function validateBridgelabzDomain(input) {
    const regex = /^bridgelabz\.(\w+\.)*co$/;
    return regex.test(input);
}

// Test cases
console.log(validateBridgelabzDomain("bridgelabz.co"));        // true
console.log(validateBridgelabzDomain("bridgelabz.xyz.co"));    // true
console.log(validateBridgelabzDomain("bridgelabz.tech.dev.co")); // true
console.log(validateBridgelabzDomain("bridgelabzcom"));        // false
console.log(validateBridgelabzDomain("bridgelabz.xyz"));       // false
console.log(validateBridgelabzDomain("bridgelabz."));         // false
console.log(validateBridgelabzDomain("bridgelabz..co"));      // false


//EMAIL-4
function validateBridgelabzEmail(input) {
    const regex = /^[a-zA-Z0-9][a-zA-Z0-9._+\-]*\.xyz@bridgelabz\.co(\.in)?$/;
    return regex.test(input);
}

// Test cases
console.log(validateBridgelabzEmail("abc.xyz@bridgelabz.co"));         
console.log(validateBridgelabzEmail("abc_xyz@bridgelabz.co.in"));      
console.log(validateBridgelabzEmail("abc+xyz@bridgelabz.co.in"));     
console.log(validateBridgelabzEmail("abc-xyz@bridgelabz.co"));         
console.log(validateBridgelabzEmail("abc.xyz@bridgelabz.co.in"));      
console.log(validateBridgelabzEmail("abc@bridgelabz.co.in"));          
console.log(validateBridgelabzEmail("abc.xyz@bridgelabz.com"));      
console.log(validateBridgelabzEmail("abc@bridgelabz.co"));             
console.log(validateBridgelabzEmail("abc$xyz@bridgelabz.co.in"));     
console.log(validateBridgelabzEmail("abc.xyz@bridgelabz.xyz.co.in"));  



//EMAIL-5
function validateBridgelabzEmail(input) {
    const regex = /^[a-zA-Z0-9][a-zA-Z0-9._+\-]*\.xyz@bridgelabz\.co(\.[a-zA-Z]{2})?$/;
    return regex.test(input);
}

// Test cases
console.log(validateBridgelabzEmail("abc.xyz@bridgelabz.co"));         
console.log(validateBridgelabzEmail("abc_xyz@bridgelabz.co.in"));      
console.log(validateBridgelabzEmail("abc+xyz@bridgelabz.co.us"));    
console.log(validateBridgelabzEmail("abc-xyz@bridgelabz.co.uk"));    
console.log(validateBridgelabzEmail("abc.xyz@bridgelabz.co.au"));     
console.log(validateBridgelabzEmail("abc@bridgelabz.co.in"));         
console.log(validateBridgelabzEmail("abc.xyz@bridgelabz.com"));       
console.log(validateBridgelabzEmail("abc$xyz@bridgelabz.co.in")); 
console.log(validateBridgelabzEmail("abc.xyz@bridgelabz.co.india"));   
console.log(validateBridgelabzEmail("abc.xyz@bridgelabz.co.123"));     

