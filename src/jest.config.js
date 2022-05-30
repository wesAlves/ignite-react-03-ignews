module.exports = {
  testPathIgnorePatterns: ["/node/modules", "/.next"],

  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],

  testEnvironment: "jsdom",

  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rrotDir>/node_modules/babel-jest",
  },
};
