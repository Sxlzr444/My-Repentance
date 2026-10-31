let exists = (a) => {
    if (a===undefined||a===null) {
        return false;
    }
    return true;
}

class person {
    constructor(namae) {
        this.name = namae??"anonymous";
        this.faction = "unknown";
        this.position = "unknown";
        this.hope= "no hope yet.";
        this.motionForce = null;
    }
    isInManholeCover() {
        return (exists(manholeCover) && (this.position === "manhole cover")) ? true : false;
    }
    get theories() {
        return Theory.instances
            .filter(theory => theory.presenter === this.name)
            .map(theory => theory.name);
    }
}

class Theory {
    /** 记录 Theroy 的所有实例。 */
    static instances = [];

    constructor(namae) {
        this.name = namae ?? null;
        this.correctness = null;
        this.presenter = null;
        this._mistakes = [];
        Theory.instances.push(this); //创建一个 Theory 的实例时，将其push进 instances。
    }

    get mistakes() {
        if (this.correctness === true && this._mistakes.length > 0) {
            throw new Error("correctness 为 true 时不允许有 mistakes");
        }
        return this._mistakes;
    }

    set mistakes(v) {
        if (this.correctness === true) {
            throw new Error("correctness 为 true 时不允许有 mistakes");
        }
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

let LeisMathmatics = new Theory("Lei's Mathmatics");
LeisMathmatics.correctness = false;
LeisMathmatics.presenter = "Lei Shaowu";
LeisMathmatics.mistakes = [
    "1*0=1",
    "2(1+2)=23",
    "1/1/10=1/(1/10)",
    "(a+b)*(c+d)=a*c+b*d",
];


let ClassicalMechanics = new Theory("Classical Mechanics");
ClassicalMechanics.correctness = true;
ClassicalMechanics.presenter = "Isaac Newton";

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