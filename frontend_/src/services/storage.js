export function getObj(key) {
    return JSON.parse(window.localStorage.getItem(key) ?? "{}");
}

export function setObj(key, obj) {
    window.localStorage.setItem(key, JSON.stringify(obj));
}

export function getSomething() {
    return getObj("SomeKey") ?? "default";
}

export function setSomething(someValue) {
    setObj("SomeKey", someValue);
}

export default { getObj, setObj, getArticleVote, setArticleVote };
