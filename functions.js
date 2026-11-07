import {manholeCover} from "./params.js";

export let exists = (a) => {
    if (a===undefined||a===null) return false;
    if (Array.isArray(a) && a.length === 0) return false;
    if (Object.prototype.toString.call(a) === '[object Object]' && Object.keys(a).length === 0) return false;
    if (typeof a === "string" && a.length === 0) return false;
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
    isInManholeCover = () => {
        return (exists(manholeCover) && (this.position === "manhole cover")) ? true : false;
    }
    hideUnderneathManholecover = () => {
        try{
            if(!exists(manholeCover)) throw new Error("没有井盖，无法躲进去！");
            if(this.isInManholeCover()) {
                console.warn("已经在井盖里了，进井盖没有效果。");
                return;
            }
            this.position = "manhole cover";
        }
        catch (err) {
            console.error("进井盖失败："+err.message);
        }
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
        if (typeof c !== "boolean" && c !== null) throw new Error("correctness 只能为 true/false/null。");
        if (exists(this.#mistakes) && c === true) throw new Error("存在 mistakes 的理论，correctness 不能设置为true。");
        this.#correctness = c;
    }

    get mistakes() {
        if (this.correctness === true && exists(this.#mistakes)) {
            throw new Error("correctness 为 true 时不允许有 mistakes，请检查是否通过特殊方法绕过了 setter 直接操作了 #mistakes。");
        }
        return Array.isArray(this.#mistakes) ? Object.freeze([...this.#mistakes]) : Object.freeze(this.#mistakes);
    }
    set mistakes(v) {
        if (!Array.isArray(v) && v !== null && v !== undefined) throw new Error("mistakes 必须是数组对象 Array 或为空。");
        if (this.correctness === true) {
            throw new Error("correctness 为 true 时不允许有 mistakes。");
        }
        this.#mistakes = v;
    }
};

export let matchedTheObjectivefacts = (theory) => {
    if (!(theory instanceof Theory)) {
        throw new Error("该对象不是一个理论");
    }
    return Boolean(theory.correctness);
};


/**
 * @typedef {Object} Options    理论的参数
 * @property {string}        name          理论名称（必填）
 * @property {string|null}   [presenter]    提出者，默认 null
 * @property {boolean|null}  [correctness]  正确性，默认 null
 * @property {string[]|null}       [mistakes]     仅当 correctness === false 时有效
 */

/**
 * 工厂函数，用于注册新理论
 * @param {Options} [options]
 * @returns {Theory|undefined}
 */
export let newTheory = (options = {}) => {
    let t = null;
    try{
        if (options === null || typeof options !== "object" || Array.isArray(options)) {
            throw new Error("newTheory 的参数必须是对象。");
        }
        let {name, presenter=null, correctness=null, mistakes} = options;
        t = new Theory(name);
        t.presenter = presenter ?? null;
        t.correctness = correctness;
        if (t.correctness === false) {
            t.mistakes = mistakes;
        }
        else if (exists(mistakes)) console.warn("这个理论不是错误的（correctness 为 true；或 correctness 未确定为 null），设置 mistakes 无效。");
        return t;
    }
    catch(err){
        console.error(err.message + "创建新理论失败，返回 undefined。");
        if(t) Theory.instances = Theory.instances.filter(i => i !== t);
    };
}