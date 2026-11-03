import {newTheory} from "./functions.js";

let YundongliInnovativeTheory = newTheory({
    name: "Yundongli Innovative Theory",
    presenter: "Lei Shaowu",
    correctness: false,
    mistakes: [
        "Objects need force to keep moving.",
        "Denial of reference frames",
        "Denial of inertia",
        "Denial of Newton's laws",
        "Period of the Earth's revolution is 5,027,904 years.",
        /* 下面这行错误应该移动到雷氏电学理论中去 */
        //"No current in a neutral wire",
    ],
});

let LeisMathematics = newTheory({
    name: "Lei's Mathematics",
    presenter: "Lei Shaowu",
    correctness: false,
    mistakes: [
        "1*0=1",
        "2(1+2)=23",
        "1/1/10=1/(1/10)",
        "(a+b)*(c+d)=a*c+b*d",
    ],
});

let ClassicalMechanics = newTheory({
    name: "Classical Mechanics",
    presenter: "Isaac Newton",
    correctness: true,

})

export {YundongliInnovativeTheory, LeisMathematics, ClassicalMechanics};