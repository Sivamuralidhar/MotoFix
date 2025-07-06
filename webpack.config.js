const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.web.js',
  mode: 'development',
  devServer: {
    port: 3000,
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@react-native/babel-preset',
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/',
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.web.js', '.js', '.jsx', '.ts', '.tsx'],
    alias: {
      'react-native$': 'react-native-web',
      'react-native-device-info': path.resolve(__dirname, 'Utils/DeviceInfoWebMock.js'),
      '@react-navigation/native-stack/lib/module/views/NativeStackView': 'react-native-web/dist/exports/View',
      'react-native-vector-icons/FontAwesome': 'react-native-vector-icons/dist/FontAwesome',
      'react-native-vector-icons/MaterialCommunityIcons': 'react-native-vector-icons/dist/MaterialCommunityIcons',
        '@react-navigation/native/lib/module/useBackButton': path.resolve(__dirname, 'web/dummy.js'),
        '@react-navigation/native/lib/module/useLinking': path.resolve(__dirname, 'web/dummy.js'),
      'react-native-vector-icons/AntDesign': 'react-native-vector-icons/dist/AntDesign',
      extensions: ['.web.js', '.js', '.web.ts', '.ts', '.web.tsx', '.tsx', '.json'],
    },
    fullySpecified: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};