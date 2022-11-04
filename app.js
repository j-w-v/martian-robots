const Martians = require("./Martians.js");

/* Set instructions, if I had more time would ask for user input
   or format this differently. The '5 3' confused me initially as it wasn't 
   clear that this was grid size instructions. */
const instructions =
  "5 3\n1 1 E\nRFRFRFRF\n\n3 2 N\nFRRFLLFFRRFLL\n\n0 3 W\nLLFFFLFLFL";

const martians = new Martians();

// send instructions and log ending positions.
console.log(martians.send(instructions));
