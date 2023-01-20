module.exports = {
  transform: {
    "^.+\\.ts$": "babel-jest",
    "^.+\\.js$": "babel-jest",
    "^.+\\.tsx?$": "babel-jest",
  },
  testEnvironment: "jsdom",
  collectCoverageFrom: [
    "src/**/*.tsx",
    "src/**/*.ts",
    "!src/utils/*",
    "!src/**/*.d.ts",
    "!src/main.tsx",
  ],
};
