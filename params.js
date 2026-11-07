export let manholeCover = null;
/** 
 * @param {any} v 设置井盖是什么，用于改变 manholeCover 的值，可以是变量或对象。
 * @returns {void} */
export let setManholeCover = (v) => manholeCover = v;

export let think = { 
    did: true,
    hard: true };

export const Original = null; //这段是为了让 myRepentance(Original) 这个调用不报错