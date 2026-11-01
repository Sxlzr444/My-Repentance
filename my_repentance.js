import {Person,exists,matchedTheObjectivefacts} from "./functions.js";
import {think,Original,manholeCover} from "./params.js";
import {YundongliInnovativeTheory} from "./theories_default.js";

function myRepentance(Original){                                                          /*我的悔悟（原创）*/
    myRepentance.author = "Lei Shaowu";                                                   /*作者 雷绍武*/
    globalThis.I = new Person("Lei Shaowu");                                              /*我叫雷绍武，*/
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