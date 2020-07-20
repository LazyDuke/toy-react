module.exports = {
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-react',
      {
        pragma: 'ToyReact.createElement'
      }
    ]
  ],
  plugins: ['@babel/plugin-proposal-class-properties']
}
