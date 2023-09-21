module.exports = {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-recess-order',
  ],
  rules: {
    'block-no-empty': true,
    'shorthand-property-no-redundant-values': true,
    'color-hex-length': 'short',
    'no-descending-specificity': null,
  },
};
