// PINCODE-1

// Function to validate Indian PIN code
function validatePinCode(pinCode) {
    let pinRegex = /^[1-9][0-9]{5}$/; 
    return pinRegex.test(pinCode);
}

// Test cases
console.log(validatePinCode("400088")); 
console.log(validatePinCode("000123")); 
console.log(validatePinCode("4008"));   
console.log(validatePinCode("4000889"));
console.log(validatePinCode("40A088")); 


// PINCODE-2
// Function to validate Indian PIN code
function validatePinCode(pinCode) {
    let pinRegex = /^[1-9][0-9]{5}$/; // Ensures it starts with 1-9 and has exactly 6 digits
    return pinRegex.test(pinCode);
}

// Test cases
console.log(validatePinCode("400088"));  
console.log(validatePinCode("000123"));  
console.log(validatePinCode("A400088")); 
console.log(validatePinCode("#400088"));
console.log(validatePinCode("4008"));    
console.log(validatePinCode("4000889")); 
console.log(validatePinCode("40A088"));  


// PINCODE-3
// Function to validate Indian PIN code
function validatePinCode(pinCode) {
    let pinRegex = /^[1-9][0-9]{5}$/; 
    return pinRegex.test(pinCode);
}

// Test cases
console.log(validatePinCode("400088"));  
console.log(validatePinCode("000123"));  
console.log(validatePinCode("A400088")); 
console.log(validatePinCode("#400088")); 
console.log(validatePinCode("4008"));    
console.log(validatePinCode("4000889")); 
console.log(validatePinCode("40A088"));  

