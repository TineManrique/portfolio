var path = require('path');
const HWP = require('html-webpack-plugin');
module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src', 'index.js'),
        vendor: [
          'react',
          'react-dom',
          'react-router-dom',
        ],
      },
   output: {
       filename: 'build.js',
       path: path.join(__dirname, '/dist')
    },
   module:{
       rules:[
           {
                test: /\.js$/,
                exclude: [/node_modules/,/\.scss$/],
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                  { loader: 'style-loader' },
                  {
                    loader: 'css-loader',
                    options: {
                      modules: true
                    }
                  },
                  { loader: 'sass-loader' }
                ]
            }
    ]
   }
}