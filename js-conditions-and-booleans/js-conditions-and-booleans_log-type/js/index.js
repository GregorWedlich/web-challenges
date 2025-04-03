const data = "";

switch (typeof data) {
  case "undefined":
    console.log("The variable 'data' is undefined!");
    break;
  case "null":
    console.log("The variable 'data' is null!");
    break;
  case "number":
    console.log("The variable 'data' is a number!");
    break;
  case "NaN":
    console.log("The variable 'data' is not a number!");
    break;
  case "string":
    console.log("The variable 'data' is a string!");
    break;
  case "boolean":
    console.log("The variable 'data' is a boolean!");
    break;
  case "object":
    console.log("The variable 'data' is an object!");
    switch (data.isArray) {
      case true:
        console.log("The variable 'data' is an array!");
        break;
      case false:
        switch (data.isArray) {
          case true:
            console.log("The variable 'data' is an array!");
            break;
        }
    }
  case "function":
    console.log("The variable 'data' is a function!");
    break;
  case "unknown":
    console.log("The variable 'data' is unknown!");
    break;
}
