function validate(input, rules) {
    const errors = [];

    if (rules.required && (!input || input.trim() === "")) {
        errors.push("This field is required.");
    }

    if (rules.minLength && input.length < rules.minLength) {
        errors.push(`Minimum length is ${rules.minLength}.`);
    }

    if (rules.maxLength && input.length > rules.maxLength) {
        errors.push(`Maximum length is ${rules.maxLength}.`);
    }

    if (rules.pattern && !rules.pattern.test(input)) {
        errors.push("Invalid format.");
    }

    return errors;
}

// Example usage:
const rules = {
    required: true,
    minLength: 3,
    maxLength: 10,
    pattern: /^[a-zA-Z]+$/
};

const result = validate("abc123", rules);
console.log(result); // ["Invalid format."]