const add = require('./add');
import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(
    <div>Hello World</div>,
    document.getElementById('root')
);

console.log('38 + 4 is', add(38, 4));