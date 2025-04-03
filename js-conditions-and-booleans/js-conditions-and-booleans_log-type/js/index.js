const data = [];

switch (typeof data) {
  case "undefined":
    console.log("The variable 'data' is undefined!");
    break;
  case "number":
    console.log("The variable 'data' is a number!");
    break;
  case "string":
    console.log("The variable 'data' is a string!");
    break;
  case "boolean":
    console.log("The variable 'data' is a boolean!");
    break;
  case "object":
    switch (true) {
      case data === null:
        console.log("The variable 'data' is null!");
        break;
      case Array.isArray(data):
        console.log("The variable 'data' is an array!");
        break;
      default:
        console.log("The variable 'data' is an object!");
    }
    break;
  case "function":
    console.log("The variable 'data' is a function!");
    break;
  default:
    console.log("The variable 'data' is unknown!");
}
