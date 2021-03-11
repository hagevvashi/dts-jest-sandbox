import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  clearMocks: true,
  coverageDirectory: "<rootDir>/coverage/",
  testMatch: ["**/?(*.)+(test).ts?(x)", "**/?(*.)+(test-d).ts?(x)"],
  transform: {
    "^.+\\.test-d.tsx?$": "dts-jest/transform",
    "^.+\\.[jt]sx?$": "babel-jest"
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  globals: {
    _dts_jest_: {
      compiler_options: "./tsconfig.json",
      transpile: false
    }
  }
};
export default config;
