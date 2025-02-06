let sampleView = "Hello";

console.log(sampleView);
document.write("This is HTML Page from JS File Printing<br><br>");
document.write("10,20,30,40,50<br><br>");

let myAnswer = ""; // Initialize variable

switch (true) {
    case 10 > 20:
        myAnswer = "red color";
        break;
    case 20 < 30:
        myAnswer = "green color";
        break;
    case 50 > 20:
        myAnswer = "black color";
        break;
    case 100 == 200:
        myAnswer = "orange color";
        break;
    default:
        myAnswer = "None of the above";
        break;
}

document.write("Selected color is: " + myAnswer);  // Output the result