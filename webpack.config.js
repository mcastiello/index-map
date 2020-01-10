/*
 * Copyright (c) 2020
 * Author: Marco Castiello
 * E-mail: marco.castiello@gmail.com
 * Project: Index Map
 */

const path = require('path');

module.exports = {
    entry: './src/index-map.js',
    output: {
        filename: 'index-map.js',
        path: path.resolve(__dirname, 'dist'),
    }
};
