/*
 * Copyright (c) 2020
 * Author: Marco Castiello
 * E-mail: marco.castiello@gmail.com
 * Project: Index Map
 */

const path = require('path');

module.exports = {
    entry: './src/IndexMap.js',
    output: {
        filename: 'IndexMap.js',
        path: path.resolve(__dirname, 'dist'),
    }
};
