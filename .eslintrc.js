const fs = require("fs");

const folders = fs
  .readdirSync("src", { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

module.exports = {
  extends: [
    "react-app",
    "plugin:prettier/recommended",
    "prettier",
    "next/core-web-vitals",
  ],
  plugins: ["simple-import-sort"],
  overrides: [
    {
      files: ["*.tsx", "*.ts", "*.js", "*.jsx"],
      rules: {
        "simple-import-sort/imports": [
          "warn",
          {
            groups: [
              // Packages. `react` related packages come first.
              // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
              ["^\\u0000", "^react$", "^prop-types$", "^@?\\w", "^redux$"],
              // Absolute imports
              [`^(${folders.join("|")})(/.*|$)`],
              // Relative imports.
              ["^\\."],
              // for scss imports.
              ["^[^.]"],
            ],
          },
        ],
      },
    },
  ],
};
