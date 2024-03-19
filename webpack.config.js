const path = require('path');

module.exports = {
    mode: 'production', // or 'production'
    entry: './src/index.tsx', // Ensure this points to your TypeScript entry file
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'umd',
        globalObject: 'this'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'] // Add '.ts' and '.tsx'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/, // Handle both .ts and .tsx files
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    externals: {
        react: 'react',
        'react-dom': 'react-dom'
    }
};
