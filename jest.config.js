module.exports = {
  transform: {
    "^.+\\.ts$": "babel-jest",
    "^.+\\.js$": "babel-jest",
    "^.+\\.tsx?$": "babel-jest",
  },
  testEnvironment: "jsdom",
};
