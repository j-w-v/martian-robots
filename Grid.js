function Grid(length, height) {
    // track lost robots
    let lost = [];
  
    // throw error if grid is bigger than 50 / smaller than 1
    if (length > 50 || height > 50)
      throw new Error("Grid size cannot be greater than 50x50");
    else if (length < 0 || height < 0)
      throw new Error("Grid size cannot be smaller than 1x1");
  
    //set height and length of grid from passed in params
    this.height = height === undefined ? 0 : parseInt(height,10);
    this.length = length === undefined ? 0 : parseInt(length,10);
  
    // add lost position
    this.addLost = function (position) {
      lost.push(position);
    };
  
    // return lost position
    this.hasLost = function (position) {
      return lost.indexOf(position) > -1;
    };
  }
  
module.exports = Grid;
  