// Form validation logic (you can move your validation logic here if needed)
export const validateSignUp = (userData) => {
    const { username, email, password, confirmPassword } = userData;
    validateUsername(username);
    validateEmail(email);
    validatePassword(password);

    if (password !== confirmPassword) {
        return { success: false, message: 'Passwords do not match' };
    }

    return { success: true, message: 'success' };
};

// validate email
export const validateEmail = (email) => {
    const validPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(validPattern)) {
        return { success: false, message: 'Invalid email address' };
    } else {
        return { success: true, message: 'success' };
    }
}


// Username validation function
export const validateUsername = (username) => {
    const minLength = 3;  // Minimum username length
    const maxLength = 20;  // Maximum username length
    const validPattern = /^[a-zA-Z0-9_-]+$/;  // Alphanumeric, underscores, and hyphens allowed

    let message = '';
    let isValid = true;

    // Check username length
    if (username.length < minLength) {
        isValid = false;
        message = `Username must be at least ${minLength} characters long.`;
    } else if (username.length > maxLength) {
        isValid = false;
        message = `Username must be less than ${maxLength} characters long.`;
    }
    // Check valid characters
    else if (!validPattern.test(username)) {
        isValid = false;
        message = 'Username can only contain letters, numbers, underscores, or hyphens.';
    }

    return {
        success: isValid,
        message: message,
    };
};



// Password validation function
export const validatePassword = (password) => {
    const minLength = 8;  // Minimum password length
    const upperCasePattern = /[A-Z]/;  // At least one uppercase letter
    const lowerCasePattern = /[a-z]/;  // At least one lowercase letter
    const numberPattern = /[0-9]/;  // At least one number
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;  // At least one special character

    let message = '';
    let isValid = true;

    // Check password length
    if (password.length < minLength) {
        isValid = false;
        message = `Password must be at least ${minLength} characters long.`;
    }
    // Check for uppercase letter
    else if (!upperCasePattern.test(password)) {
        isValid = false;
        message = 'Password must contain at least one uppercase letter.';
    }
    // Check for lowercase letter
    else if (!lowerCasePattern.test(password)) {
        isValid = false;
        message = 'Password must contain at least one lowercase letter.';
    }
    // Check for number
    else if (!numberPattern.test(password)) {
        isValid = false;
        message = 'Password must contain at least one number.';
    }
    // Check for special character
    else if (!specialCharPattern.test(password)) {
        isValid = false;
        message = 'Password must contain at least one special character.';
    }

    return {
        success: isValid,
        message: message,
    };
};
