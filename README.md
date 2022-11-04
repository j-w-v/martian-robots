# Martian Robots

## Prerequisites

* Node

## How to run

Clone repo
```
$ node app.js 
```
 
## Nice to have had 

* Built in ReactJS (time issue)
* Parse the input in a way that the user can see the robots move around the screen
* Visually appealing UI rather than console log.
* Add tests such as:

```
test('test robot default grid position', () => {
  const mockGrid = {
	height: 5,
	width: 3
  }
  const robot = new Robot(grid);
  robot.setPosition(‘0’, ‘0’, ’N)
  robot.move(‘FF’)
  expect(robot.getPosition()).toBe(‘2 0 N');
});
```

* Could have set repo up better, linting, use of npm, commitizen etc

## Initial thoughts

Use functions as objects as there is more than one robot / time limit

#### Dealing with instructions

Start with loop over instructions

Extract grid size

Check if its a new robot “”, if so, create new robot and pass grid

Else check if its a start instruction “” -1, set position

Else add to output string

#### Needed functions

Grid /
Position /
Robot /
Instruction Loop 