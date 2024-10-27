const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter text for the logo (up to 3 characters):',
      validate: (input) => input.length <= 3 || 'Text must be 3 characters or less.',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (color keyword or hex):',
    },
    {
      type: 'list',
      name: 'shapeType',
      message: 'Choose a shape for the logo:',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (color keyword or hex):',
    },
  ])
  .then(({ text, textColor, shapeType, shapeColor }) => {
    let shape;
    switch (shapeType) {
      case 'Circle':
        shape = new Circle(shapeColor);
        break;
      case 'Triangle':
        shape = new Triangle(shapeColor);
        break;
      case 'Square':
        shape = new Square(shapeColor);
        break;
    }

    const svgContent = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shape.render()}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>
    `;

    fs.writeFile('logo.svg', svgContent, (err) => {
      if (err) throw err;
      console.log('Generated logo.svg');
    });
  });
