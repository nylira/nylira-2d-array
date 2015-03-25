(function(){
'use strict'

function TwoDimensionalArray(height, width) {
  var output = []
  for(var y=0; y < height; y++) {
    output[y] = []
    for(var x=0; x < width; x++) {
      output[y][x] = 0
    }
  }
  return output
}

console.log(new TwoDimensionalArray(10,10))
module.exports = TwoDimensionalArray

}())
