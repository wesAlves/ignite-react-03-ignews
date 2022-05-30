module.exports = {
  testIgnorePatterns: ["/node/modules", "/.next"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
};
