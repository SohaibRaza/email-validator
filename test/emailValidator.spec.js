const { validateEmailSyntax } = require("../src/emailValidator");

describe("Email Syntax Validation", () => {
  test("Valid email address", () => {
    expect(validateEmailSyntax("test@example.com")).toBe(true);
    expect(validateEmailSyntax("john.doe@example.co.uk")).toBe(true);
    expect(validateEmailSyntax("info@sub.example.com")).toBe(true);
  });

  test("Invalid email address", () => {
    expect(validateEmailSyntax("")).toBe(false); // Empty string
    expect(validateEmailSyntax("test@example")).toBe(false); // No dot in domain part
    expect(validateEmailSyntax("@example.com")).toBe(false); // Empty local part
    expect(validateEmailSyntax("test@.com")).toBe(false); // Empty domain part
    expect(validateEmailSyntax("test@example.c")).toBe(false); // Less than two characters after the last dot
    expect(validateEmailSyntax("test@@example.com")).toBe(false); // Multiple "@" symbols
    expect(validateEmailSyntax("john.doe@example.")).toBe(false); // No characters after the last dot
  });

  test("Whitespace trimming", () => {
    expect(validateEmailSyntax(" test@example.com ")).toBe(true); // Leading and trailing spaces
    expect(validateEmailSyntax("john.doe @example.com")).toBe(false); // Spaces within the email
  });
});
