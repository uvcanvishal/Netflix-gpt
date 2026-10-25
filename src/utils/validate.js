export const checkValidData = (email, password) => {
    if (!email || !password) {
        return "Please fill in all fields.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return "Please enter a valid email address.";
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    
    if (password.length < 6 && !passwordRegex.test(password)) {
        return "Please enter a valid password.";
    }

    return null;
}