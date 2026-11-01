import {manholeCover} from "./params.js";

export let exists = (a) => {
    if (a===undefined||a===null) {
        return false;
    }
    return true;
}

export class Person {
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
    hideUnderneathManholecover(){
        if(!exists(manholeCover)) throw new Error("没有井盖，无法躲进去！");
        this.position = "manhole cover";
    }
    get theories() {
        return Theory.instances
            .filter(theory => theory.presenter === this.name)
            .map(theory => theory.name);
    }
}

export class Theory {
    /** 记录 Theroy 的所有实例。 */
    static instances = [];

    #mistakes = [];
    #correctness = null;

    constructor(namae) {
        this.name = namae ?? null;
        this.correctness = null;
        this.presenter = null;
        Theory.instances.push(this); //创建一个 Theory 的实例时，将其push进 instances。
    }

    get correctness() {
        return this.#correctness;
    }

    set correctness(c) {
        if (typeof c !== "boolean" && c !== null) throw new Error("correctness 只能为 true/false/null");
        if (this.#mistakes.length > 0 && c === true) throw new Error("存在 mistakes 的理论，correctness 不能设置为true");
        this.#correctness = c;
    }

    get mistakes() {
        if (this.correctness === true && this.#mistakes.length > 0) {
            throw new Error("correctness 为 true 时不允许有 mistakes，请检查是否通过特殊方法绕过了 setter 直接操作了 #mistakes");
        }
        return Object.freeze([...this.#mistakes]);
    }
    set mistakes(v) {
        if (this.correctness === true) {
            throw new Error("correctness 为 true 时不允许有 mistakes");
        }
        this.#mistakes = v;
    }
}

export let matchedTheObjectivefacts = (theory) => {
    if (!(theory instanceof Theory)) {
        throw new Error("该对象不是一个理论");
    }
    return Boolean(theory.correctness);
};