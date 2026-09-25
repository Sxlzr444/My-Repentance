let exists = (a) => {
    if (a === undefined) {
        return false;
    }
    if (a === null) {
        return false;
    }
    return true;
}

class person {
    constructor(namae) {
        this.name = namae??"anonymous";
        this.faction = "unknown";
        this.position = "unknown";
        this.wish= "no wish yet.";
        this.motionForce = null;
    }
    isInManholeCover() {
        return (exists(manholeCover) && (this.position === "manhole cover")) ? true : false;
    }
}

class Theory {
    constructor(namae) {
        this.name = namae ?? null;
        this.correctness = null;
        this.persenter = null;
        this._mistakes = [];
    }

    get mistakes() {
        if (this.correctness === true && this._mistakes.length > 0) {
            throw new Error("correctness 为 true 时不允许有 mistakes");
        }
        return this._mistakes;
    }

    set mistakes(v) {
        this._mistakes = v;
    }
}

const matchedTheObjectivefacts = (theory) => {
    if (!(theory instanceof Theory)) {
        throw new Error("该对象不是一个理论");
    }
    return Boolean(theory.correctness);
};

let manholeCover = null;

let think = { 
    did: true,
    hard: true };


let YundongliInnovativeTheory = new Theory("Yundongli Innovative Theory");
YundongliInnovativeTheory.correctness = false;
YundongliInnovativeTheory.persenter = "Lei Shaowu";
YundongliInnovativeTheory.mistakes = [
    "Objects need force to keep moving.",
    "Denial of reference frames",
    "Denial of inertia",
    "Denial of Newton's laws",
    "1*0=1",
    "Period of the Earth's revolution is 5,027,904 years.",
    "No current in a neutral wire",
];

let ClassicalMechanics = new Theory("Classical Mechanics");
ClassicalMechanics.correctness = true;
ClassicalMechanics.persenter = "Isaac Newton";

const Original = null; //这段是为了让 myRepentance(Original) 这个调用不报错

function myRepentance(Original){                                                          /*我的悔悟（原创）*/
    myRepentance.author = "Lei Shaowu";                                                   /*作者 雷绍武*/
    globalThis.I = new person("Lei Shaowu");                                              /*我叫雷绍武，*/
    I.faction = "826";                                                                    /*我是826！*/
    if (!exists(manholeCover)) {                                                          /*如果没有井盖，*/
        I.motionForce = 0;                                                                /*雷绍武826的运动力=0，*/
        I.position = "box";                                                               /*雷绍武进盒！*/
    }
    YundongliInnovativeTheory.correctness = false;                                        /*运动力创新理论是错误的，*/
    console.log(matchedTheObjectivefacts(YundongliInnovativeTheory)); //false             /*运动力哪里符合客观事实？*/
    if(think?.hard) {                                                                     /*只要大家认真去思考，*/
        console.log(YundongliInnovativeTheory.mistakes);                                  /*就一定能够发现运动力创新理论的种种错误。*/
    }
    I.hope = "You all understand this.";                                                  /*希望大家明白这个道理。*/
}

myRepentance(Original);