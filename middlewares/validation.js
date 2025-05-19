export const validateUserProfile = (req, res, next) => {
  const { username, email } = req.body;

  if (!username || !email) {
    return res.status(400).json({ message: "Username and email are required" });
  }

  const trimmedUsername = username.trim();
  const trimmedEmail = email.trim().toLowerCase();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (trimmedUsername.length < 3) {
    return res.status(400).json({ message: "Username must be at least 3 characters long" });
  }

  if (!emailRegex.test(trimmedEmail)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  req.body.username = trimmedUsername;
  req.body.email = trimmedEmail;

  next();
};

export const validateSignup = (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (username.trim().length < 3) {
    return res.status(400).json({ message: "Username must be at least 3 characters" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim().toLowerCase())) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: "Password must be at least 6 characters" });
  }

  next();
};

export const validateLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim().toLowerCase())) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  next();
};
