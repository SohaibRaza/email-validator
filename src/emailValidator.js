function validateEmailSyntax(email) {
  email = email.trim();

  const hasAtSymbol = email.indexOf("@");
  if (hasAtSymbol === -1 || hasAtSymbol !== email.lastIndexOf("@")) {
    return false;
  }

  const [username, domain] = email.split("@");

  if (
    username.length === 0 ||
    domain.length === 0 ||
    /\s/.test(username) ||
    /\s/.test(domain)
  ) {
    return false;
  }

  if (username.length === 0 || domain.length === 0) {
    return false;
  }

  const hasDot = domain.indexOf(".");
  if (hasDot === -1 || hasDot === 0 || hasDot === domain.length - 1) {
    return false;
  }

  const domainParts = domain.split(".");
  const lastDomainPart = domainParts[domainParts.length - 1];
  if (lastDomainPart.length < 2) {
    return false;
  }

  return true;
}

module.exports = {
  validateEmailSyntax,
};
