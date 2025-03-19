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



// Function to validate Indian PIN code
function validatePinCode(pinCode) {
    let pinRegex = /^[1-9][0-9]{5}$/; // Ensures it starts with 1-9 and has exactly 6 digits
    return pinRegex.test(pinCode);
}

// Test cases
console.log(validatePinCode("400088"));  // ✅ true (Valid PIN code)
console.log(validatePinCode("000123"));  // ❌ false (Invalid, starts with 0)
console.log(validatePinCode("A400088")); // ❌ false (Invalid, starts with a letter)
console.log(validatePinCode("#400088")); // ❌ false (Invalid, starts with special character)
console.log(validatePinCode("4008"));    // ❌ false (Invalid, less than 6 digits)
console.log(validatePinCode("4000889")); // ❌ false (Invalid, more than 6 digits)
console.log(validatePinCode("40A088"));  // ❌ false (Invalid, contains a letter)
