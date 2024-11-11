export const PasswordValidation = (minLength: number = 8) => ({
  required: "Password is required",
  minLength: {
    value: minLength,
    message: `Password must be at least ${minLength} characters long`,
  },
  validate: {
    hasUpperCase: (value: string) =>
      /[A-Z]/.test(value) ||
      "Password must contain at least one uppercase letter",
    hasLowerCase: (value: string) =>
      /[a-z]/.test(value) ||
      "Password must contain at least one lowercase letter",
    hasNumber: (value: string) =>
      /\d/.test(value) || "Password must contain at least one number",
    hasSpecialChar: (value: string) =>
      /[!@#$%^&*]/.test(value) ||
      "Password must contain at least one special character",
  },
});

export const emailValidationRules = {
  required: "Email is required",
  pattern: {
    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
    message: "Invalid email address",
  },
};

export const UserNameValidation = (
  minLength: number = 3,
  maxLength: number = 15
) => ({
  required: "Username is required",
  minLength: {
    value: minLength,
    message: `Username must be at least ${minLength} characters long`,
  },
  maxLength: {
    value: maxLength,
    message: `Username cannot exceed ${maxLength} characters`,
  },
  pattern: {
    value: /^[a-zA-Z0-9_-]+$/,
    message:
      "Username can contain only letters, numbers, underscores, or hyphens",
  },
});
