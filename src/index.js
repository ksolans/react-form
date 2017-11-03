import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const header = React.createElement('div', {className: 'header'}, "Welcome to my React App")


const square = React.createElement('div', {
  className: 'background'
})

const blue = React.createElement('div', {
  className: 'backgroundBlue'
})

const container = React.createElement('div', { className: 'border' },
  square,
  square,
  blue
)

const column = React.createElement('div', {className: 'col-sm-6'}, container)

const footer = React.createElement('div', {id: 'footer'}, "And this is the footer \u00A9", new Date().getFullYear())

const page = React.createElement('div', {}, 
	header,
	column,
	column,
	footer
)
ReactDOM.render(page, document.getElementById('root'))