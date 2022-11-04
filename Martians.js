// import grid and robot
const Grid = require("./Grid.js");
const Robot = require("./Robot.js");

function Martians() {
  this.send = function (instructions) {
    let output = "";

    // split instructions into array
    instructions = instructions.split("\n");

    // split first element and send to Grid
    const gridSize = instructions[0].split(" ");
    const grid = new Grid(gridSize[0], gridSize[1]);

    // create new robot, passing in grid sizes.
    let robot = new Robot(grid);

    // loop over instructions. 
    for (let i = 1; i < instructions.length; i++) {
      let instruction = instructions[i];
      //if a new robot, initialise
      if (isNewRobot(instruction)) robot = new Robot(grid);
      //if a starting instruction, set position
      else if (isStarting(instruction)) robot.setPosition(instruction);
      // add to output and move robot
      else output += (output.length > 0 ? "\n" : "") + robot.move(instruction);
    }
    return output;
  };

  // check if new set of instructions
  isNewRobot = function (instruction) {
    return instruction === "";
  };

  // check if the instruction is a starting position.
  isStarting = function (instruction) {
    return instruction.indexOf(" ") > -1;
  };
}

module.exports = Martians;