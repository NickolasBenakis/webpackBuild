module.exports = {
  presets: [['@babel/preset-env'], '@babel/preset-react'],
  plugins: [],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
      ],
      plugins: [],
    },
  },
};
