const fs = require('fs');
const {Shape, Triangle, Square, Circle} = require('./lib/shapes.js');
const inquirer = require('inquirer');

// prompt for getting user inputs for text, text color, shape, and shape color
function init() {
    inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Enter the text on your logo (up to 3 characters)",
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter the color of text on your logo (keyword or hexadecimal)",
    },
    {
      type: "list",
      name: "shape",
      message: "Choose the shape of your logo",
      choices: ['square', 'circle', 'triangle']
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter the color of the shape on your logo (keyword or hexadecimal)",
    },
  ])
  .then((answers) => {
    // if more than 3 characters entered, log the issue and restart the prompt
    if (answers.text.length > 3) {
        console.log('Please enter only up to 3 characters for text');
        init();
    } else {
        var logo;
        // checks to see which option was chosen for shape and instantiates a shape
        switch(answers.shape) {
            case 'square':
                logo = new Square(answers.shapeColor, answers.text, answers.textColor);
                break;
            case 'triangle':
                logo = new Triangle(answers.shapeColor, answers.text, answers.textColor);
                break;
            case 'circle':
                logo = new Circle(answers.shapeColor, answers.text, answers.textColor);
                break; 
    }
        // writes the svg string to the logo file
        fs.writeFile('./examples/logo.svg', logo.render(), (err) => err? console.error(err) : console.log('Generated logo.svg'));
  }});
}
// call to start the program
init();