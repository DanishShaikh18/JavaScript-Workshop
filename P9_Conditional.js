// Using if, else if, and else
let temperature = 30;

console.log("If, Else If, Else Example:");
if (temperature > 35) {
    console.log("It's a very hot day!");
} else if (temperature > 25 && temperature <= 35) {
    console.log("It's a warm day!");
} else if (temperature > 15 && temperature <= 25) {
    console.log("It's a pleasant day!");
} else {
    console.log("It's a cold day!");
}
console.log("\n");

// Using switch
let day = 3; // 1 = Monday, 2 = Tuesday, ..., 7 = Sunday

console.log("Switch Example:");
switch (day) {
    case 1:
        console.log("It's Monday!");
        break;
    case 2:
        console.log("It's Tuesday!");
        break;
    case 3:
        console.log("It's Wednesday!");
        break;
    case 4:
        console.log("It's Thursday!");
        break;
    case 5:
        console.log("It's Friday!");
        break;
    case 6:
        console.log("It's Saturday!");
        break;
    case 7:
        console.log("It's Sunday!");
        break;
    default:
        console.log("Invalid day number!");
        break;
}
