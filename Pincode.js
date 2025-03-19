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
