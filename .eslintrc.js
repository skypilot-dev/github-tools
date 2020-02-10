module.exports = {
  extends: [
    './node_modules/@skypilot/toolchain/lib/configs/eslint.js',
  ],
  rules: {
    'arrow-parens': ['warn', 'as-needed'],
  }
};
