let valueColors = ["red", "blue", "green"];
let colorNumber = 199;

switch (colorNumber) {
  case 1:
    console.log(valueColors[0]);
    break;
  case 2:
    console.log(valueColors[1]);
    break;
  case 3:
    console.log(valueColors[2]);
    break;
  case 4:
  case 5:
  case 6:
  case 7:
    console.log("black");
    break;
  default:
    console.log("white");
    break;
}
