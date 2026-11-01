import {Theory} from "./functions.js";

let YundongliInnovativeTheory = new Theory("Yundongli Innovative Theory");
YundongliInnovativeTheory.correctness = false;
YundongliInnovativeTheory.presenter = "Lei Shaowu";
YundongliInnovativeTheory.mistakes = [
    "Objects need force to keep moving.",
    "Denial of reference frames",
    "Denial of inertia",
    "Denial of Newton's laws",
    "Period of the Earth's revolution is 5,027,904 years.",
    /* 下面这行错误应该移动到雷氏电学理论中去 */
    //"No current in a neutral wire",
];

let LeisMathematics = new Theory("Lei's Mathematics");
LeisMathematics.correctness = false;
LeisMathematics.presenter = "Lei Shaowu";
LeisMathematics.mistakes = [
    "1*0=1",
    "2(1+2)=23",
    "1/1/10=1/(1/10)",
    "(a+b)*(c+d)=a*c+b*d",
];

let ClassicalMechanics = new Theory("Classical Mechanics");
ClassicalMechanics.correctness = true;
ClassicalMechanics.presenter = "Isaac Newton";

export {YundongliInnovativeTheory, LeisMathematics, ClassicalMechanics};