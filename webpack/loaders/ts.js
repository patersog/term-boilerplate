module.exports = {
  test: /\.tsx?$/,
  loader: 'ts-loader',
  exclude: /node_modules/,
  options: { reportFiles: ['src/**/*.{ts,tsx}']}
}